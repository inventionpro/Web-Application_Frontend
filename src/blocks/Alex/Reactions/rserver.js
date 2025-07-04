import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'reaction_server';

const blockData = {
  message0: 'Reaction server',
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
  const code = ['reaction.message.guild', JavaScript.ORDER_NONE];
  return code;
};
