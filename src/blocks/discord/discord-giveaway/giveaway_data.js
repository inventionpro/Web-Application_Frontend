import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = ['gData', JavaScript.ORDER_NONE];
  return code;
};
