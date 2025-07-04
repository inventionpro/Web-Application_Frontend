import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = ['s4dmessage.member.voice.channel.id', JavaScript.ORDER_NONE];
  return code;
};
