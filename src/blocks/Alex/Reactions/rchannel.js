import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'reaction_channel';
const blockData = {
  message0: 'Reaction channel',
  colour: '#A55B80',
  output: Types.Channel,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['reaction.message.channel', javascriptGenerator.ORDER_NONE];
};
