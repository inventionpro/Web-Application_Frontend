import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'jg_example_output';
const blockData = {
  message0: 'example output %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    }
  ],
  output: 'String',
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
  const code = `${text} + "abc"`;
  return [code, javascriptGenerator.ORDER_NONE];
};
