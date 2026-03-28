import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'better_botvcid';
const blockData = {
  message0: 'Bot Voice channel',
  args0: [],
  output: Types.String,
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.guild.me.voice.channelId', javascriptGenerator.ORDER_NONE];
};
