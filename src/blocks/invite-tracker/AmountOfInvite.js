import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'Amount';
const blockData = {
  message0: 'Amount of Invite of Inviter',
  colour: '#187795',
  output: Types.Number,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['uses', javascriptGenerator.ORDER_NONE];
};
