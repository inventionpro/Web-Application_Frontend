import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'reaction_channel';

const blockData = {
  message0: 'Reaction channel',
  colour: '#A55B80',
  output: 'Channel',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['reaction.message.channel', javascriptGenerator.ORDER_NONE];
  return code;
};
