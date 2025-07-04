import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = ['s4dTyping.guild', JavaScript.ORDER_NONE];
  return code;
};
