import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_base_bot';
const blockData = {
  message0: 'bot',
  args0: [],
  colour: '#5b67a5',
  output: Types.User,
  tooltip: 'The bot itself, as a user.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`s4d.client.user`, javascriptGenerator.ORDER_NONE];
};
