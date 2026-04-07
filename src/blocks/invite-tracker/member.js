import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'Member';
const blockData = {
  message0: 'Member',
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
  return ['member', javascriptGenerator.ORDER_NONE];
};
