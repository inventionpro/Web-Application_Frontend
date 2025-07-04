import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'better_song_thumbnail';

const blockData = {
  message0: 'track thumbnail',
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
  return [`newSong.thumbnail`, JavaScript.ORDER_NONE];
};
