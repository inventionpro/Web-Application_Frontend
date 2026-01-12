import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  return ['s4dmessage.member.voice.channel', javascriptGenerator.ORDER_NONE];
};
