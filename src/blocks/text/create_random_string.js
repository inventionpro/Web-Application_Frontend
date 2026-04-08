import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'create_random_string';
const blockData = {
  message0: 'create random string with the length of %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: Types.Number
    }
  ],
  colour: '195',
  output: Types.String,
  tooltip: 'if you are reading this you stink',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`S4D_makeid(${text})`, javascriptGenerator.ORDER_NONE];
};
