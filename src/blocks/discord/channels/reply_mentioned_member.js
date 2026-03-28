import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'reply_mentioned_member';
const blockData = {
  message0: 'answer mentioned member',
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
  return [`s4d.message.mentions.members.first()`, javascriptGenerator.ORDER_NONE];
};
