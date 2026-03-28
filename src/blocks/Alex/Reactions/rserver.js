import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'reaction_server';
const blockData = {
  message0: 'Reaction server',
  colour: '#D85E47',
  output: Types.Server,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['reaction.message.guild', javascriptGenerator.ORDER_NONE];
};
