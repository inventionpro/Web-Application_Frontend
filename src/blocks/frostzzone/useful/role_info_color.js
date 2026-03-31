import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'fz_role_info_color';
const blockData = {
  message0: 'Color of role %1',
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
  return [`${role}.color`, javascriptGenerator.ORDER_NONE];
};
