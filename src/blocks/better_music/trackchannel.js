import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'retro_track_channel';

const blockData = {
  message0: 'Track channel',
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
  return [`queue.data.channel`, JavaScript.ORDER_NONE];
};
