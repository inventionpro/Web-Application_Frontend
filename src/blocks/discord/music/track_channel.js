import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_track_channel';

const blockData = {
  message0: '%{BKY_TRACK_CHANNEL}',
  args0: [],
  output: 'Channel',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  return [`queue.metadata.channel`, javascriptGenerator.ORDER_NONE];
};
