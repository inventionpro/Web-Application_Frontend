import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_text_randomletter';
const blockData = {
  message0: 'get random letter from text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: Types.Any
    }
  ],
  colour: '%{BKY_TEXTS_HUE}',
  output: Types.String,
  tooltip: 'Gets a random letter from the text.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`(${text}).charAt(Math.floor(Math.random() * (${text}).length))`, javascriptGenerator.ORDER_NONE];
};
