import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_joined_at';
const blockData = {
  message0: '%{BKY_JOINED_AT}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    }
  ],
  colour: '#187795',
  output: Types.Date,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  if (String(member).endsWith('.user') || String(member).endsWith('.user)')) member = member.replace('.user', '');
  return [`${member}.joinedAt`, javascriptGenerator.ORDER_NONE];
};
