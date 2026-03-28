import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_bot_voice_channel';
const blockData = {
  message0: '%{BKY_BOT_VOICE_CHANNEL}',
  args0: [],
  output: Types.String,
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.guild.me.voice.channelId', javascriptGenerator.ORDER_NONE];
};
