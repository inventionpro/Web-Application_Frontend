import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'interaction_voice_channel';
const blockData = {
  message0: 'interaction member voice channel',
  colour: '#D85E47',
  output: Types.Channel,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.member.voice.channel', javascriptGenerator.ORDER_NONE];
};
