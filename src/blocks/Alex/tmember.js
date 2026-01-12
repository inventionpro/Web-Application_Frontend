import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dTyping.member', javascriptGenerator.ORDER_NONE];
  return code;
};
