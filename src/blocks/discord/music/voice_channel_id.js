import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_voice_channel_id';

const blockData = {
  message0: '%{BKY_VOICE_CHANNEL_ID}',
  args0: [],
  output: 'VoiceChannelId',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  return ['s4dmessage.member.voice.channelId', javascriptGenerator.ORDER_NONE];
};
