import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  return ['s4dmessage.member.voice.channelId', javascriptGenerator.ORDER_NONE];
};
