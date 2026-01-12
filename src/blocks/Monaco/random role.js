import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'monaco_random_role';

const blockData = {
  type: 'random_role_in_server',
  message0: 'Random role in server %1',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  colour: '#4C97FF',
  output: 'Role',
  inputsInline: true,
  tooltip: 'Gets a random role in a specified server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_server}.roles.cache.random()`;
  return [code, javascriptGenerator.ORDER_NONE];
};
