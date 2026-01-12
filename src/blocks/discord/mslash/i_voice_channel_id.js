import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'interaction_voice_channel_id';

const blockData = {
  message0: 'interaction member voice channel id',
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

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['interaction.member.voice.channelId', javascriptGenerator.ORDER_NONE];
  return code;
};
