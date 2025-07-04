import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_mentioned_role';

const blockData = {
  message0: '%{BKY_MENTIONED_ROLE}',
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
  const code = [`s4dmessage.mentions.roles.first()`, JavaScript.ORDER_NONE];
  return code;
};
