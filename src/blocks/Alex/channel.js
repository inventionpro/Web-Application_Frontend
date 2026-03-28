import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'tts_channel';
const blockData = {
  message0: 'Voice Channel',
  args0: [],
  output: Types.Channel,
  colour: '#5153c2',
  tooltip: 'The voice channel ID of the current message member(?)',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.member.voice.channelId', javascriptGenerator.ORDER_NONE];
};
