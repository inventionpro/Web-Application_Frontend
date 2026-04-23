import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'monaco_members_with_role';
const blockData = {
  type: 'monaco_members_with_role',
  message0: 'get all members with role %1',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      check: Types.Role
    }
  ],
  colour: '#4C97FF',
  output: Types.Collection,
  inputsInline: true,
  tooltip: 'Get all members with role',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_members_with_role'] = (block) => {
  var value_role = javascriptGenerator.valueToCode(block, 'role', javascriptGenerator.ORDER_ATOMIC);
  return [`${value_role}.members`, javascriptGenerator.ORDER_NONE];
};
