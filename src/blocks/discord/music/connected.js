import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_connected';

const blockData = {
  message0: '%{BKY_CONNECTED}',
  args0: [],
  output: 'Boolean',
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
  return ['queue.connection', JavaScript.ORDER_NONE];
};
