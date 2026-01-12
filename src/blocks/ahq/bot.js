import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = (block) => {
  const a = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC).replace('.user', '').replace('.author', '.member');
  const code = [`String(${a}.presence.status || "offline")`, javascriptGenerator.ORDER_NONE];
  return code;
};
