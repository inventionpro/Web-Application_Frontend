import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'mongo_connect';
const blockData = {
  type: 'block_type',
  message0: 'Connect to MongoDB %1',
  args0: [
    {
      type: 'input_value',
      name: 'URL',
      check: Types.String
    }
  ],
  colour: '#F46580',
  tooltip: 'Login into mongo with a url',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'URL', javascriptGenerator.ORDER_ATOMIC);
  return `const mdb = new DB(${value});`;
};
