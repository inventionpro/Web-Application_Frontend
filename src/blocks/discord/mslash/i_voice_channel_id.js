import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'interaction_voice_channel_id';
const blockData = {
  message0: 'interaction member voice channel id',
  colour: '#D85E47',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.member.voice.channelId', javascriptGenerator.ORDER_NONE];
};
