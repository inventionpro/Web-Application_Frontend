import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'typing_member';
const blockData = {
  message0: 'Typing member',
  colour: '#0b409c',
  output: Types.Member,
  tooltip: 'The typing member',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dTyping.member', javascriptGenerator.ORDER_NONE];
};
