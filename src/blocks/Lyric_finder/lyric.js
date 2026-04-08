import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'lyric';
const blockData = {
  message0: 'Lyric',
  colour: '#40BF4A',
  args0: [],
  tooltip: null,
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`_S4D_lyrics`, javascriptGenerator.ORDER_NONE];
};
