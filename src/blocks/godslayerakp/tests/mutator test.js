import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
Blockly.Blocks['gsa_your_mom_lmao_mutator_block_hat'] = {
  init: function () {
    this.appendDummyInput().appendField('has fill color').appendField(new Blockly.FieldCheckbox('FALSE'), 'check');
    this.setInputsInline(false);
    this.setColour('#BA4A9A');
  }
};

Blockly.Blocks['gsa_your_mom_lmao'] = {
  init: function () {
    this.jsonInit({
      type: 'block_type',
      message0: 'create new jimp image with size %1 %2 then %3',
      args0: [
        {
          type: 'input_value',
          name: 'sx',
          check: 'Number'
        },
        {
          type: 'input_value',
          name: 'sy',
          check: 'Number'
        },
        {
          type: 'input_statement',
          name: 'code'
        }
      ],
      previousStatement: null,
      nextStatement: null,
      inputsInline: true,
      colour: 260,
      tooltip: 'Asynchronously runs the code inside of it',
      helpUrl: ''
    });
    this.setMutator(new Blockly.Mutator([], this));
  },
  isFilled: false,
  isHiden: true,
  mutationToDom: function () {
    const container = document.createElement('mutation');
    container.setAttribute('return', this.isFilled ? 'true' : 'false');
    return container;
  },
  domToMutation: function (xmlElement) {
    this.isFilled = xmlElement.getAttribute('return') == 'true';
    this.updateShape_();
  },
  decompose: function (workspace) {
    // create the main block
    var containerBlock = workspace.newBlock('gsa_create_new_jimp_image_mutator_block_hat');
    containerBlock.setFieldValue(this.isFilled ? 'true' : 'false', 'check');
    containerBlock.initSvg();

    return containerBlock;
  },
  compose: function (containerBlock) {
    this.isFilled = containerBlock.getFieldValue('check') == 'TRUE';

    let topBlock = this.getInputTargetBlock('code');

    this.updateShape_();

    topBlock.connect(this.getInput('code'));
  },
  updateShape_: function () {
    if (this.isFilled && !this.getInput('color')) {
      this.removeInput('code');
      this.appendValueInput('color').setCheck('Colour').appendField('with color');
      this.appendStatementInput('code').appendField('then');
    } else if (!this.isFilled && this.getInput('color')) {
      this.removeInput('color');
    }
  }
};

JavaScript['gsa_your_mom_lmao'] = function (block) {
  var sizex = JavaScript.valueToCode(block, 'sx', JavaScript.ORDER_ATOMIC);
  var sizey = JavaScript.valueToCode(block, 'sy', JavaScript.ORDER_ATOMIC);
  var statements_code = JavaScript.statementToCode(block, 'code');
  var code = `
  new jimp(${sizex}, ${sizey}, ${this.isFilled ? `${JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC)}, ` : ''}async (err, image) => {
    ${statements_code}
  })
  `;
  return code;
};
