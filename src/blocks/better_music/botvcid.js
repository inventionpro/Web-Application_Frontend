import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'better_botvcid';

const blockData = {
  message0: 'Bot Voice channel',
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
  return ['s4dmessage.guild.me.voice.channelId', javascriptGenerator.ORDER_NONE];
};
