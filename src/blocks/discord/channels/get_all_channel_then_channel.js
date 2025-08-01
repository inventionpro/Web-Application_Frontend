import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_get_all_channel_channel';

const blockData = {
  message0: '%{BKY_GET_ALL_CHANNEL_CHANNEL}',
  args0: [],
  colour: '#a55b80',
  output: 'Channel',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return [`c`, JavaScript.ORDER_NONE];
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_ALL_CHANNEL_PARENT',
    types: ['s4d_get_all_channel']
  }
]);
