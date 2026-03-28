import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'better_voice_channel';
const blockData = {
  message0: 'Voice Channel',
  args0: [],
  output: Types.Channel,
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
  return ['s4dmessage.member.voice.channel', javascriptGenerator.ORDER_NONE];
};
