import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_started_thread';

const blockData = {
  message0: '%{BKY_CREATED_THREAD}',
  colour: '#2a97b8',
  output: 'Channel',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dCreatedThread', javascriptGenerator.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_THREAD_START',
    types: ['s4d_start_thread']
  }
]);
