import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'button_author';
const blockData = {
  message0: '%{BKY_B_CLICKER}',
  colour: '#187795',
  output: Types.Member,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.member', javascriptGenerator.ORDER_NONE];
};
