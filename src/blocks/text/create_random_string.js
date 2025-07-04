import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'create_random_string';

const blockData = {
  message0: 'create random string with the length of %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: null
    }
  ],
  colour: '195',
  output: 'String',
  tooltip: 'if you are reading this you stink',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_ATOMIC);
  const code = [`S4D_makeid(${text})`, JavaScript.ORDER_NONE];
  return code;
};
