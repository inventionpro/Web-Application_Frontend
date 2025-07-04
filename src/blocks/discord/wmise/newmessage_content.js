import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_newmessage_content';

const blockData = {
  message0: 'new message content',
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
  const code = ['newMessage.content', JavaScript.ORDER_NONE];
  return code;
};
