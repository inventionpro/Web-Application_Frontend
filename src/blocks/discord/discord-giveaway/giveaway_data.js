import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_giveaway_data';

const blockData = {
  message0: 'giveaway data',
  colour: '#187795',
  output: 'Object',
  tooltip: 'An object containing all of the data about the Giveaway you just created.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['gData', javascriptGenerator.ORDER_NONE];
  return code;
};
