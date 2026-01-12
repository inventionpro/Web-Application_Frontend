import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'reply_mentioned_member';

const blockData = {
  message0: 'answer mentioned member',
  colour: '#187795',
  tooltip: '',
  output: 'Member',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`s4d.message.mentions.members.first()`, javascriptGenerator.ORDER_NONE];
  return code;
};
