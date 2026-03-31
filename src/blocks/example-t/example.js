import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'jg_example_block';
const blockData = {
  message0: 'example block %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 300,
  tooltip: 'An example block.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return `console.log(${member});`;
};
