import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'pagination_embed';
const blockData = {
  message0: '%1 %2',
  args0: [
    {
      type: 'input_value',
      name: 'EMBED1',
      check: Types.Embed
    },
    {
      type: 'input_value',
      name: 'EMBED2',
      check: Types.Embed
    }
  ],
  output: Types.Embed,
  colour: '#5BA58C',
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let embed1 = javascriptGenerator.valueToCode(block, 'EMBED1', javascriptGenerator.ORDER_ATOMIC);
  let embed2 = javascriptGenerator.valueToCode(block, 'EMBED2', javascriptGenerator.ORDER_ATOMIC);
  embed1 = embed1.match(/embeds:\s*\[\s*(.+?)\s*\]/)[1];
  embed2 = embed2.match(/embeds:\s*\[\s*(.+?)\s*\]/)[1];
  return [`{ embeds: [${embed1}, ${embed2}] }`, javascriptGenerator.ORDER_NONE];
};
