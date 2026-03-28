import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'button_id';
const blockData = {
  message0: '%{BKY_B_ID}',
  colour: '#5BA58C',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.customId', javascriptGenerator.ORDER_NONE];
};
