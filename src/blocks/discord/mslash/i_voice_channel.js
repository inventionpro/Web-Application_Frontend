import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'interaction_voice_channel';

const blockData = {
  message0: 'interaction member voice channel',
  colour: '#D85E47',
  output: 'VoiceChannel',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['interaction.member.voice.channel', javascriptGenerator.ORDER_NONE];
  return code;
};
