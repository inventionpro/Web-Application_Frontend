import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'typing_server';

const blockData = {
  message0: 'Typing server',
  colour: '#7b3a9c',
  output: 'Server',
  tooltip: 'The server someone is typing in',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dTyping.guild', javascriptGenerator.ORDER_NONE];
  return code;
};
