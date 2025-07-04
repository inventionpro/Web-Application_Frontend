import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_base_bot';

const blockData = {
  message0: 'bot',
  args0: [],
  colour: '#5b67a5',
  output: ['Member', 'User'],
  tooltip: 'The bot itself, as a user.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`s4d.client.user`, JavaScript.ORDER_NONE];
  return code;
};
