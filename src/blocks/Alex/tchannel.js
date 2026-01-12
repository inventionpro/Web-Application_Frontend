import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'typing_channel';

const blockData = {
  message0: 'Typing channel',
  colour: '#1392ed',
  output: 'Channel',
  tooltip: 'Get a channel a member is typing in',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dTyping.channel', javascriptGenerator.ORDER_NONE];
  return code;
};
