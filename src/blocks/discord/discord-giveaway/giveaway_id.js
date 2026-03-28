import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_giveaway_id';
const blockData = {
  message0: '%{BKY_GIVEAWAY_ID}',
  colour: '#187795',
  output: Types.String,
  tooltip: 'The Message ID of the Giveaway you just created.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['gData.message.id', javascriptGenerator.ORDER_NONE];
};
