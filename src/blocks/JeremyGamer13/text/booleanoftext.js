import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_text_booleanfrom';
const blockData = {
  message0: 'boolean from text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: Types.Any
    }
  ],
  colour: '%{BKY_TEXTS_HUE}',
  output: Types.Boolean,
  tooltip: 'Gets the text and checks if it equals "true."',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`((${text}).toLowerCase() == 'true')`, javascriptGenerator.ORDER_NONE];
};
