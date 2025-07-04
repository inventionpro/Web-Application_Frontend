import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_track_url';

const blockData = {
  message0: '%{BKY_TRACK_URL}',
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
  return [`track.url`, JavaScript.ORDER_NONE];
};
