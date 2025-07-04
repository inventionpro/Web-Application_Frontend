import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = [`lyrics`, JavaScript.ORDER_NONE];
  return code;
};
