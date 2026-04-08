import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'monaco_get_role_on_position';
const blockData = {
  type: 'monaco_get_role_on_position',
  message0: 'get role on position # %1 in server %2',
  args0: [
    {
      type: 'input_value',
      name: 'position',
      check: Types.Number
    },
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    }
  ],
  colour: '#4C97FF',
  output: Types.Role,
  inputsInline: true,
  tooltip: 'Get a role on a specific position in a server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_get_role_on_position'] = (block) => {
  var value_position = javascriptGenerator.valueToCode(block, 'position', javascriptGenerator.ORDER_ATOMIC);
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  return [`${value_server}.roles.cache.find(role => role.position === ${value_position})`, javascriptGenerator.ORDER_NONE];
};
