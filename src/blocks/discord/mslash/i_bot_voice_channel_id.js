import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'bot_voice_channel_id';

const blockData = {
  message0: 'bot voice channel id',
  colour: '#D85E47',
  output: 'VoiceChannelId',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['interaction.guild.me.voice.channelId', JavaScript.ORDER_NONE];
  return code;
};
