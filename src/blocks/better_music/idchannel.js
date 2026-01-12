import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  return ['s4dmessage.member.voice.channelId', javascriptGenerator.ORDER_NONE];
};
