import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_joined_at';

const blockData = {
  message0: '%{BKY_JOINED_AT}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    }
  ],
  colour: '#187795',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  let member = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  if (String(member).endsWith('.user') || String(member).endsWith('.user)')) member = member.replace('.user', '');
  return [`String(${member}.joinedAt)`, JavaScript.ORDER_NONE];
};
