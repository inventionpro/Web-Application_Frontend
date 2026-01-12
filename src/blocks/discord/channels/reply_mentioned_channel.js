import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'reply_mentioned_channel';

const blockData = {
  message0: 'answer mentioned channel',
  colour: '#187795',
  tooltip: '',
  output: 'Channel',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`s4d.message.mentions.channels.first()`, javascriptGenerator.ORDER_NONE];
  return code;
};
