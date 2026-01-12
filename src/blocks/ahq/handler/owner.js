import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'owner_ahq_hndler';

const blockData = {
  message0: 'Member %1 is owner?',
  args0: [
    {
      type: 'input_value',
      name: 'm',
      check: 'Member'
    }
  ],
  colour: '#33cc00',
  output: 'Boolean',
  tooltip: '???',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  let member = javascriptGenerator.valueToCode(block, 'm', javascriptGenerator.ORDER_ATOMIC);
  let final = member.replace('.author', '.member.user');
  const code = [`String(${final}.id) == (ahqhandler[\`owner\`])`, javascriptGenerator.ORDER_NONE];
  return code;
};
