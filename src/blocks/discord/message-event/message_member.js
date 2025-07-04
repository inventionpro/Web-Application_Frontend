import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_message_member';

const blockData = {
  message0: '%{BKY_MESSAGE_MEMBER}',
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
  const code = ['s4dmessage.member', JavaScript.ORDER_NONE];
  return code;
};
