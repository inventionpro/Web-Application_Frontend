import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'vc_channel';
const blockData = {
  message0: 'Together voice channel',
  args0: [],
  output: Types.Channel,
  colour: '#40BF4A',
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
