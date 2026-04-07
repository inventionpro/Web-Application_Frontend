import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_text_hasnumber';
const blockData = {
  message0: 'text %1 contains numbers?',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: Types.Any
    }
  ],
  colour: '%{BKY_TEXTS_HUE}',
  output: Types.Boolean,
  tooltip: 'Checks if the input text has a number in it.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`(/\\d/.test(${text}))`, javascriptGenerator.ORDER_NONE];
};
