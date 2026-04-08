import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'monaco_set_role_position';
const blockData = {
  message0: 'in server %1 set role %2 to position # %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    },
    {
      type: 'input_value',
      name: 'role',
      check: Types.Role
    },
    {
      type: 'input_value',
      name: 'position',
      check: Types.Number
    }
  ],
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Set a role to a specific position.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_set_role_position'] = (block) => {
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  var value_role = javascriptGenerator.valueToCode(block, 'role', javascriptGenerator.ORDER_ATOMIC);
  var value_position = javascriptGenerator.valueToCode(block, 'position', javascriptGenerator.ORDER_ATOMIC);
  return `${value_server}.${value_role}.setPosition(${value_position});`;
};
