import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_message_guild';

const blockData = {
  message0: '%{BKY_MESSAGE_GUILD}',
  colour: '#D85E47',
  output: 'Server',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4dmessage.guild', JavaScript.ORDER_NONE];
  return code;
};
