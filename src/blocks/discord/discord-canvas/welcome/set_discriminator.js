import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 's4d_set_discriminator';

const blockData = {
  message0: '%{BKY_SET_DISCRIMINATOR}',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: ['String', 'number']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'STRING', JavaScript.ORDER_ATOMIC);
  let code = `.setDiscriminator(${value})`;
  return code;
};
