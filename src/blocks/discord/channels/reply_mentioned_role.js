import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'reply_mentioned_role';
const blockData = {
  message0: 'answer mentioned role',
  colour: '#187795',
  tooltip: '',
  output: Types.Role,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`s4d.message.mentions.roles.first()`, javascriptGenerator.ORDER_NONE];
};
