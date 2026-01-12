import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'lyric';

const blockData = {
  message0: 'Lyric',
  colour: '#40BF4A',
  args0: [],
  tooltip: null,
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`_S4D_lyrics`, javascriptGenerator.ORDER_NONE];
  return code;
};
