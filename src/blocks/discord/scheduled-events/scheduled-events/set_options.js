import BaseBlockly from 'blockly';
import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const BORDER_FIELDS = ['S_EVENT_NAME', 'S_EVENT_START', 'S_EVENT_END', 'S_PRIV_LVL', 'S_NTITI_TYPE', 'S_EVENT_DESC', 'S_EVENT_CHANNEL', 'S_METADATA', 'S_REASON'];

const BORDER_TYPES = ['String', 'String', 'String', 'PrvtLvl', 'entity', 'String', 'String', 'String', 'String'];

const event_set_options = {
  message0: 'set event',
  mutator: 'event_set_options_mutator',
  helpUrl: 'https://www.unixtimestamp.com/',
  tooltip: 'Right click on the block and click on Help to find the website for the dates!',
  previousStatement: null,
  nextStatement: null,
  colour: '#ae81f7'
};

Blockly.Blocks['event_set_options'] = {
  init: function () {
    this.jsonInit(event_set_options);
  }
};

Blockly.Blocks['event_set_options_mutator'] = {
  init: function () {
    this.setColour('#CECDCE');
    this.setTooltip('Right click on the block and click on Help to find the website for the dates!');
    this.setHelpUrl('https://www.unixtimestamp.com/');
  }
};

const BORDER_MUTATOR_MIXIN = {
  inputs_: [true, true, false, true, true, false, false, false, false],

  mutationToDom: function () {
    if (!this.inputs_) {
      return null;
    }
    const container = document.createElement('mutation');
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i]);
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == 'true';
    }
    this.updateShape_();
  },

  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('event_set_options_mutator');
    for (let i = 0; i < this.inputs_.length; i++) {
      containerBlock
        .appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]])
        .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? 'TRUE' : 'FALSE'), BORDER_FIELDS[i].toUpperCase());
    }
    containerBlock.initSvg();
    return containerBlock;
  },

  compose: function (containerBlock) {
    // Set states
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == 'TRUE';
    }
    this.updateShape_();
  },

  updateShape_: function () {
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
    }
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i]) {
        this.appendValueInput(BORDER_FIELDS[i].toUpperCase()).setCheck(BORDER_TYPES[i]).setAlign(Blockly.ALIGN_RIGHT).appendField(BaseBlockly.Msg[BORDER_FIELDS[i]]);
      }
    }
  }
};

Blockly.Extensions.registerMutator('event_set_options_mutator', BORDER_MUTATOR_MIXIN, null, ['']);

JavaScript['event_set_options'] = function (block) {
  let name = '';
  let start_date = '';
  let end_date = '';
  let description = '';
  let privateLevel = '';
  let type = '';
  let channel = '';
  let metadata = '';
  let reason = '';

  if ((JavaScript.valueToCode(block, 'S_EVENT_NAME', JavaScript.ORDER_ATOMIC) || null) !== null) {
    name = `\nname: ${JavaScript.valueToCode(block, 'S_EVENT_NAME', JavaScript.ORDER_ATOMIC)},`;
  }
  if ((JavaScript.valueToCode(block, 'S_EVENT_START', JavaScript.ORDER_ATOMIC) || null) !== null) {
    start_date = `\nscheduledStartTime:${JavaScript.valueToCode(block, 'S_EVENT_START', JavaScript.ORDER_ATOMIC)},`;
  }
  if ((JavaScript.valueToCode(block, 'S_EVENT_END', JavaScript.ORDER_ATOMIC) || null) !== null) {
    end_date = `\nscheduledEndTime:${JavaScript.valueToCode(block, 'S_EVENT_END', JavaScript.ORDER_ATOMIC)},`;
  }
  if ((JavaScript.valueToCode(block, 'S_EVENT_DESC', JavaScript.ORDER_ATOMIC) || null) !== null) {
    description = `\ndescription:${JavaScript.valueToCode(block, 'S_EVENT_DESC', JavaScript.ORDER_ATOMIC)},`;
  }
  if ((JavaScript.valueToCode(block, 'S_PRIV_LVL', JavaScript.ORDER_ATOMIC) || null) !== null) {
    privateLevel = `\n privacyLevel:${JavaScript.valueToCode(block, 'S_PRIV_LVL', JavaScript.ORDER_ATOMIC).replace('(', '').replace(')', '')},`;
  }
  if ((JavaScript.valueToCode(block, 'S_NTITI_TYPE', JavaScript.ORDER_ATOMIC) || null) !== null) {
    type = `\nentityType:${JavaScript.valueToCode(block, 'S_NTITI_TYPE', JavaScript.ORDER_ATOMIC).replace('(', '').replace(')', '')},`;
  }
  if ((JavaScript.valueToCode(block, 'S_EVENT_CHANNEL', JavaScript.ORDER_ATOMIC) || null) !== null) {
    channel = `\nchannel:${JavaScript.valueToCode(block, 'S_EVENT_CHANNEL', JavaScript.ORDER_ATOMIC)},`;
  }
  if ((JavaScript.valueToCode(block, 'S_METADATA', JavaScript.ORDER_ATOMIC) || null) !== null) {
    metadata = `\nentityMetadata:${JavaScript.valueToCode(block, 'S_METADATA', JavaScript.ORDER_ATOMIC)},`;
  }
  if ((JavaScript.valueToCode(block, 'S_REASON', JavaScript.ORDER_ATOMIC) || null) !== null) {
    reason = `\nreason:${JavaScript.valueToCode(block, 'S_REASON', JavaScript.ORDER_ATOMIC)},`;
  }

  let code = `${name}${start_date}${end_date}${description}${privateLevel}${type}${channel}${metadata}${reason}\n`;
  return code;
};
