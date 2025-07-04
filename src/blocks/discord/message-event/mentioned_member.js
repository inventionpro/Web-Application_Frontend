import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = [`s4dmessage.mentions.members.first()`, JavaScript.ORDER_NONE];
  return code;
};
