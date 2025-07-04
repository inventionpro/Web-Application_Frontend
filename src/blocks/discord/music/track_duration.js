import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_track_duration';

const blockData = {
  message0: '%{BKY_TRACK_DURATION}',
  args0: [],
  output: 'String',
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
  return [`track.duration`, JavaScript.ORDER_NONE];
};
