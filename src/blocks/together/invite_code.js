import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'invite_code';
const blockData = {
  message0: 'together invite code',
  colour: '#40BF4A',
  args0: [],
  tooltip: null,
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['invite.code', javascriptGenerator.ORDER_NONE];
};
