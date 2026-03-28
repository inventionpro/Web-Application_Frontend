import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_button_edit';
const blockData = {
  message0: '%{BKY_BUTTON_EDIT}',
  args0: [
    {
      type: 'input_value',
      name: 'REPLY',
      check: T(Types.String, Types.Number)
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const reply = javascriptGenerator.valueToCode(block, 'REPLY', javascriptGenerator.ORDER_ATOMIC);
  return `await i.editReply(${reply});`;
};
