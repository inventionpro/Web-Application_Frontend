import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_message_channel';

const blockData = {
  message0: '%{BKY_MESSAGE_CHANNEL}',
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

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dmessage.channel', javascriptGenerator.ORDER_NONE];
  return code;
};
