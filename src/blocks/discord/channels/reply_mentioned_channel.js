import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'reply_mentioned_channel';
const blockData = {
  message0: 'answer mentioned channel',
  colour: '#187795',
  tooltip: '',
  output: Types.Channel,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`s4d.message.mentions.channels.first()`, javascriptGenerator.ORDER_NONE];
};
