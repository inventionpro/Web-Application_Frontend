import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_giveaway_id';

const blockData = {
  message0: '%{BKY_GIVEAWAY_ID}',
  colour: '#187795',
  output: 'String',
  tooltip: 'The Message ID of the Giveaway you just created.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['gData.message.id', JavaScript.ORDER_NONE];
  return code;
};
