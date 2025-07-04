import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'typing_member';

const blockData = {
  message0: 'Typing member',
  colour: '#0b409c',
  output: 'Member',
  tooltip: 'The typing member',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4dTyping.member', JavaScript.ORDER_NONE];
  return code;
};
