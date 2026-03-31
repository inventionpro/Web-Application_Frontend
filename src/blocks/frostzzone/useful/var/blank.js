import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'blank';
const blockData = {
  message0: '⠀ %1 ⠀',
  args0: [
    {
      type: 'field_input',
      name: 'TEXT',
      text: ''
    }
  ],
  output: Types.Any,
  colour: '#a55b80',
  tooltip: 'Insert text'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var text = block.getFieldValue('TEXT');
  return [text, javascriptGenerator.ORDER_ATOMIC];
};
