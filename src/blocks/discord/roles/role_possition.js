import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_role_possition';
const blockData = {
  message0: '%{BKY_ROLE_POSSITION}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: Types.Role
    }
  ],
  output: Types.Number,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  return [`${role}.position`, javascriptGenerator.ORDER_NONE];
};
