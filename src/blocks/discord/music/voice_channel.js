import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_voice_channel';

const blockData = {
  message0: '%{BKY_VOICE_CHANNEL_C}',
  args0: [],
  output: 'VoiceChannel',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return ['s4dmessage.member.voice.channel', JavaScript.ORDER_NONE];
};
