import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'ahq_embed_info';

const blockData = {
  message0: 'Embed on message %1 info: %2',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Message'
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
  output: 'String',
  tooltip: 'Get embed information from a message, if it has an embed on it.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const a = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC).replace('.user', '').replace('.author', '.member');
  const stats = block.getFieldValue('INFO');
  const code = [`String(${a}.embeds[0]${stats})`, JavaScript.ORDER_NONE];
  return code;
};
