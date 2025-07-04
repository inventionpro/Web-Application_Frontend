import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'better_vcid';

const blockData = {
  message0: 'Voice channel id',
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

JavaScript[blockName] = function () {
  return ['s4dmessage.member.voice.channelId', JavaScript.ORDER_NONE];
};
