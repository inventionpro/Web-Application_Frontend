import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'reply_mentioned_role';

const blockData = {
  message0: 'answer mentioned role',
  colour: '#187795',
  tooltip: '',
  output: 'Role',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`s4d.message.mentions.roles.first()`, JavaScript.ORDER_NONE];
  return code;
};
