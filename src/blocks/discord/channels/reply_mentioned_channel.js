import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = [`s4d.message.mentions.channels.first()`, JavaScript.ORDER_NONE];
  return code;
};
