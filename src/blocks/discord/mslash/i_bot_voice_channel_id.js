import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'bot_voice_channel_id';
const blockData = {
  message0: 'bot voice channel id',
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
  return ['interaction.guild.me.voice.channelId', javascriptGenerator.ORDER_NONE];
};
