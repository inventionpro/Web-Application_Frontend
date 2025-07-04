import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'jg_example_block';
const blockData = {
  message0: 'example block %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
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
JavaScript[blockName] = function (block) {
  const member = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const code = `console.log(${member})
`;
  return code;
};
