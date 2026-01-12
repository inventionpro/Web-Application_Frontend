import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
//lasercat_jg_case_default
Blockly.Blocks['lasercat_jg_case_default'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('');
    this.setInputsInline(true);
    this.setColour('#8B48A3');
    this.appendValueInput('IF0').setCheck(null).appendField('case');
    this.appendStatementInput('DO0');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.icons.MutatorIcon(['lasercat_jg_case_default_INTERNAL_case2', 'lasercat_jg_case_default_INTERNAL_case3', 'lasercat_jg_case_default_INTERNAL_case4', 'lasercat_jg_case_default_INTERNAL_default'], this));
    this.setTooltip(`Run the blocks inside if the switched item is equal to this case's value. The "default" case is if the switched item doesn't match any of the other cases mentioned. Hover over the blocks in this block's gear menu for more details.`);
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    this.mutatorMenuBlockTypes = [];
    this.blockWarnings = [];
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
      container.setAttribute('mutatorblocks', this.mutatorMenuBlockTypes.join(',') || '');
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function (xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    let menutypes = xmlElement.getAttribute('mutatorblocks')?.split(',');
    if (menutypes == null) menutypes = Array(this.elseifCount_).fill('case');
    this.mutatorMenuBlockTypes = menutypes;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lasercat_jg_case_default_INTERNAL_case1');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('lasercat_jg_case_default_INTERNAL_case' + (this.mutatorMenuBlockTypes[i - 1] == 'case' ? 2 : this.mutatorMenuBlockTypes[i - 1] == 'or' ? 3 : 4));
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('lasercat_jg_case_default_INTERNAL_default');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function (containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    this.mutatorMenuBlockTypes = [];
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'lasercat_jg_case_default_INTERNAL_case2':
        case 'lasercat_jg_case_default_INTERNAL_case3':
        case 'lasercat_jg_case_default_INTERNAL_case4':
          this.mutatorMenuBlockTypes[this.elseifCount_] = clauseBlock.type == 'lasercat_jg_case_default_INTERNAL_case2' ? 'case' : clauseBlock.type == 'lasercat_jg_case_default_INTERNAL_case3' ? 'or' : 'continue';
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'lasercat_jg_case_default_INTERNAL_default':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      valueConnections[i].reconnect(this, 'IF' + i);
      statementConnections[i].reconnect(this, 'DO' + i);
    }
    elseStatementConnection.reconnect(this, 'ELSE');
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function (containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'lasercat_jg_case_default_INTERNAL_case2':
        case 'lasercat_jg_case_default_INTERNAL_case3':
        case 'lasercat_jg_case_default_INTERNAL_case4':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
          if (inputDo.connection) {
            clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
          }
          i++;
          break;
        case 'lasercat_jg_case_default_INTERNAL_default':
          inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
          break;
        //default:
        //    throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function () {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('asvutdgyhebkf');
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    this.mutatorMenuBlockTypes.slice(0, this.elseifCount_);
    for (i = 1; i <= this.elseifCount_ + this.mutatorMenuBlockTypes.length; i++) {
      if (this.getInput('continueWithDisplayText' + i)) {
        this.removeInput('continueWithDisplayText' + i);
      }
    }
    // Rebuild block.
    for (i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
        .setCheck(null)
        .appendField('case');
      if (this.mutatorMenuBlockTypes[i - 1] == 'case' || this.mutatorMenuBlockTypes[i - 1] == 'continue') {
        this.appendStatementInput('DO' + i);
      } else {
        this.appendDummyInput('DO' + i).appendField('or');
      }
      if (this.mutatorMenuBlockTypes[i - 1] == 'continue') {
        this.appendDummyInput('continueWithDisplayText' + i).appendField('continue with');
      }
      //.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendDummyInput('asvutdgyhebkf').appendField('default');
      this.appendStatementInput('ELSE');
    }
    if (this.mutatorMenuBlockTypes.length > 0) {
      if (this.mutatorMenuBlockTypes[this.mutatorMenuBlockTypes.length - 1] != 'case' && !this.elseCount_) {
        this.blockWarnings.push('You cannot end the block with a "case or" or "case continue with" block!');
      }
    }
    if (this.blockWarnings.length > 0) {
      this.setWarningText(this.blockWarnings.join('\n'));
    } else {
      this.setWarningText(null);
    }
    this.blockWarnings = [];
  }
};

javascriptGenerator.forBlock['lasercat_jg_case_default'] = (block) => {
  var n = 0;
  var code = '',
    branchCode,
    conditionCode;
  while (block.getInput('IF' + n)) {
    conditionCode = javascriptGenerator.valueToCode(block, 'IF' + n, javascriptGenerator.ORDER_NONE) || 'false';
    branchCode = javascriptGenerator.statementToCode(block, 'DO' + n);
    code += `case ${conditionCode}: 
    ${branchCode}${block.mutatorMenuBlockTypes[n - 1] == 'case' || n == 0 ? '\nbreak;' : ''}`;
    ++n;
  }
  if (block.getInput('ELSE')) {
    branchCode = javascriptGenerator.statementToCode(block, 'ELSE');
    code += `default:
    ${branchCode}
    break;`;
  }
  return code + '\n';
};
// "previousStatement": null,
// "nextStatement": null,
Blockly.Blocks['lasercat_jg_case_default_INTERNAL_case1'] = {
  init: function () {
    this.jsonInit({
      message0: 'case',
      args0: [],
      colour: '#8B48A3',
      nextStatement: null,
      tooltip: 'The first case, checking if the switched item is equal to this cases value.'
    });
  }
};
Blockly.Blocks['lasercat_jg_case_default_INTERNAL_case2'] = {
  init: function () {
    this.jsonInit({
      message0: 'case',
      args0: [],
      colour: '#8B48A3',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'The next case, checking if the switched item is equal to this cases value.'
    });
  }
};
Blockly.Blocks['lasercat_jg_case_default_INTERNAL_case3'] = {
  init: function () {
    this.jsonInit({
      message0: 'case or',
      args0: [],
      colour: '#8B48A3',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Checks if the switched item is equal to this case. If it is, run all cases until the next normal case.'
    });
  }
};
Blockly.Blocks['lasercat_jg_case_default_INTERNAL_case4'] = {
  init: function () {
    this.jsonInit({
      message0: 'case continue with',
      args0: [],
      colour: '#8B48A3',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'If the switched item is equal to this case, run the blocks inside and below until the next normal case.'
    });
  }
};
Blockly.Blocks['lasercat_jg_case_default_INTERNAL_default'] = {
  init: function () {
    this.jsonInit({
      message0: 'default',
      args0: [],
      colour: '#8B48A3',
      previousStatement: null,
      tooltip: 'The "default" case, checking if the switched item is not equal to any of the previous cases values.'
    });
  }
};
javascriptGenerator.forBlock['lasercat_jg_case_default_INTERNAL_case1'] = function () {
  return '';
};
javascriptGenerator.forBlock['lasercat_jg_case_default_INTERNAL_case2'] = function () {
  return '';
};
javascriptGenerator.forBlock['lasercat_jg_case_default_INTERNAL_case3'] = function () {
  return '';
};
javascriptGenerator.forBlock['lasercat_jg_case_default_INTERNAL_case4'] = function () {
  return '';
};
javascriptGenerator.forBlock['lasercat_jg_case_default_INTERNAL_default'] = function () {
  return '';
};
let rainbow_color = 0;
let loaded_workspace_state = 0;
let loaded_workspace_state2 = 0;
Blockly.Blocks['jg_blocklyfp_load_workspace'] = {
  init: function () {
    this.jsonInit({
      message0: 'workspace %1 %2 load? %3',
      inputsInline: false,
      args0: [
        {
          type: 'field_multilinetext',
          name: 'WORKSPACE'
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'field_checkbox',
          name: 'LOAD',
          checked: false
        }
      ],
      colour: 0,
      tooltip: 'Load a workspace XML.',
      helpUrl: ''
    });
  },
  onchange: function () {
    let work = this.getFieldValue('WORKSPACE');
    let bool = this.getFieldValue('LOAD');
    if (String(bool) == 'TRUE' && loaded_workspace_state != 2) loaded_workspace_state = 1;
    else if (String(bool) == 'FALSE') loaded_workspace_state = 0;
    rainbow_color += 1.5;
    if (rainbow_color > 360) rainbow_color = 0;
    this.setColour(Math.round(rainbow_color));
    if (loaded_workspace_state == 1) {
      try {
        let xml = Blockly.utils.xml.textToDom(work);
        Blockly.Xml.appendDomToWorkspace(xml, window.blocklyWorkspaceGlobalRef);
      } catch (err) {
        window.alert(err);
        console.log(err);
      }
      loaded_workspace_state = 2;
    }
  }
};
Blockly.Blocks['jg_blocklyfp_load_workspace_website'] = {
  init: function () {
    this.jsonInit({
      message0: 'workspace URL %1 %2 load? %3',
      inputsInline: false,
      args0: [
        {
          type: 'field_input',
          name: 'WORKSPACE'
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'field_checkbox',
          name: 'LOAD',
          checked: false
        }
      ],
      colour: 0,
      tooltip: 'Load a workspace XML from a URL.',
      helpUrl: ''
    });
  },
  onchange: function () {
    let work = this.getFieldValue('WORKSPACE');
    let bool = this.getFieldValue('LOAD');
    if (String(bool) == 'TRUE' && loaded_workspace_state2 != 2) loaded_workspace_state2 = 1;
    else if (String(bool) == 'FALSE') loaded_workspace_state2 = 0;
    rainbow_color += 1.5;
    if (rainbow_color > 360) rainbow_color = 0;
    this.setColour(Math.round(rainbow_color));
    if (loaded_workspace_state2 == 1) {
      let requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: '*'
        }
      };
      try {
        fetch(work, requestOptions)
          .then((response) => {
            let xml = Blockly.utils.xml.textToDom(response);
            Blockly.Xml.appendDomToWorkspace(xml, window.blocklyWorkspaceGlobalRef);
          })
          .catch((err) => {
            window.alert(err);
            console.log(err);
          });
      } catch (err) {
        window.alert(err);
        console.log(err);
      }
      loaded_workspace_state2 = 2;
    }
  }
};
javascriptGenerator.forBlock['jg_blocklyfp_load_workspace'] = function () {
  return '';
};
javascriptGenerator.forBlock['jg_blocklyfp_load_workspace_website'] = function () {
  return '';
};
