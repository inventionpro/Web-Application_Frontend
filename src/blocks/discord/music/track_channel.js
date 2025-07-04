import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  return [`queue.metadata.channel`, JavaScript.ORDER_NONE];
};
