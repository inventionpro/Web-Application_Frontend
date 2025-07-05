import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  var code = `${value_server}.roles.cache.random()`;
  return [code, JavaScript.ORDER_NONE];
};
