import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'vc_channel';

const blockData = {
  message0: 'Together voice channel',
  args0: [],
  output: 'VoiceChannel',
  colour: '#40BF4A',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dmessage.member.voice.channel.id', javascriptGenerator.ORDER_NONE];
  return code;
};
