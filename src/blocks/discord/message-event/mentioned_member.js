import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_mentioned_member';
const blockData = {
  message0: '%{BKY_MENTIONED_MEMBER}',
  colour: '#187795',
  tooltip: '',
  output: Types.Member,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`s4dmessage.mentions.members.first()`, javascriptGenerator.ORDER_NONE];
};
