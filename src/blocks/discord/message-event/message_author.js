import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_message_author';

const blockData = {
  message0: '%{BKY_MESSAGE_AUTHOR}',
  colour: '#187795',
  output: 'Member',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4dmessage.author', JavaScript.ORDER_NONE];
  return code;
};
