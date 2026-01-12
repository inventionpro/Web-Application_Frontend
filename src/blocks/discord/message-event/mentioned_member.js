import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_mentioned_member';

const blockData = {
  message0: '%{BKY_MENTIONED_MEMBER}',
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
  const code = [`s4dmessage.mentions.members.first()`, javascriptGenerator.ORDER_NONE];
  return code;
};
