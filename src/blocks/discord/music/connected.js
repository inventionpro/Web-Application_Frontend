import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  return ['queue.connection', javascriptGenerator.ORDER_NONE];
};
