import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  return [`queue.data.channel`, javascriptGenerator.ORDER_NONE];
};
