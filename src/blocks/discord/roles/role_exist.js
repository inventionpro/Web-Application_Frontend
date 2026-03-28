import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_role_exist';
const blockData = {
  message0: '%{BKY_ROLE_EXIST}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: Types.Role
    }
  ],
  output: Types.Boolean,
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
  return [`typeof ${role} !== undefined`, javascriptGenerator.ORDER_NONE];
};
