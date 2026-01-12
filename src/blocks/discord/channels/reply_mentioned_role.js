import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`s4d.message.mentions.roles.first()`, javascriptGenerator.ORDER_NONE];
  return code;
};
