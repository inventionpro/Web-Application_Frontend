import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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
JavaScript[blockName] = function (block) {
  let member = JavaScript.valueToCode(block, 'm', JavaScript.ORDER_ATOMIC);
  let final = member.replace('.author', '.member.user');
  const code = [`String(${final}.id) == (ahqhandler[\`owner\`])`, JavaScript.ORDER_NONE];
  return code;
};
