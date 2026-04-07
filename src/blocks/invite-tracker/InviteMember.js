import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'InviteMember';
const blockData = {
  message0: 'Inviter',
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
  return ['inviter', javascriptGenerator.ORDER_NONE];
};
