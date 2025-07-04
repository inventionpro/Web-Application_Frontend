import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'tts_channel';

const blockData = {
  message0: 'Voice Channel',
  args0: [],
  output: 'VoiceChannel',
  colour: '#5153c2',
  tooltip: 'The voice channel ID of the current message member(?)',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return ['s4dmessage.member.voice.channelId', JavaScript.ORDER_NONE];
};
