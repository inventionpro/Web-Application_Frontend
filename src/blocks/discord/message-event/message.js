import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'Message';

const blockData = {
  message0: 'message',
  colour: '#a55b80',
  output: 'Message',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4dmessage', JavaScript.ORDER_NONE];
  return code;
};
