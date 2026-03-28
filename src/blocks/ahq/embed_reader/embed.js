import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'ahq_embed_info';
const blockData = {
  message0: 'Embed on message %1 info: %2',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: Types.Message
    },
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['Title', '.title'],
        ['Message/Description', '.description'],
        ['Image', '.image'],
        ['Thumbnail', '.thumbnail'],
        ['url', '.url'],
        ['Colour', '.color']
      ]
    }
  ],
  colour: '#40BF4A',
  output: Types.String,
  tooltip: 'Get embed information from a message, if it has an embed on it.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const a = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC).replace('.user', '').replace('.author', '.member');
  const stats = block.getFieldValue('INFO');
  return [`String(${a}.embeds[0]${stats})`, javascriptGenerator.ORDER_NONE];
};
