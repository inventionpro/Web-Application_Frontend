import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'ahq_presence';

const blockData = {
  message0: 'presence of member %1',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Member'
    }
  ],
  colour: '#50a6c9',
  output: 'String',
  tooltip: 'Get the online, idle, dnd & offline precense of a member.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const a = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC).replace('.user', '').replace('.author', '.member');
  const code = [`String(${a}.presence.status || "offline")`, JavaScript.ORDER_NONE];
  return code;
};
