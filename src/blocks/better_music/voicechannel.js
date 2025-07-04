import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'better_voice_channel';

const blockData = {
  message0: 'Voice Channel',
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
