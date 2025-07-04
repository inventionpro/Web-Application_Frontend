import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
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
JavaScript[blockName] = function (block) {
  const text = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const code = `${text} + "abc"`;
  return [code, JavaScript.ORDER_NONE];
};
