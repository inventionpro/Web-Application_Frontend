import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_message_ts';

const blockData = {
  message0: 'message timestamp',
  colour: '#5BA58C',
  tooltip: '',
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4dmessage.createdTimestamp', JavaScript.ORDER_NONE];
  return code;
};
