import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'jg_example_output';
const blockData = {
  message0: 'example output %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  output: Types.String,
  colour: 300,
  tooltip: 'An example of an output block.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return [`${text} + "abc"`, javascriptGenerator.ORDER_NONE];
};
