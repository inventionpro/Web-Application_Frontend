import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'retro_track_channel';
const blockData = {
  message0: 'Track channel',
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
  return ['queue.data.channel', javascriptGenerator.ORDER_NONE];
};
