import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_giveaway_data';
const blockData = {
  message0: 'giveaway data',
  colour: '#187795',
  output: Types.Object,
  tooltip: 'An object containing all of the data about the Giveaway you just created.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['gData', javascriptGenerator.ORDER_NONE];
};
