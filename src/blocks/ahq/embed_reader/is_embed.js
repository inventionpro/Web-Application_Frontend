import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'ahq_embed_is';

const blockData = {
  message0: 'Is there embed on message %1 ?',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Message'
    }
  ],
  colour: '#40BF4A',
  output: 'Boolean',
  tooltip: 'Checks if a message has an embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const a = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC).replace('.user', '').replace('.author', '.member');
  const code = [`(${a}.embeds[0])`, JavaScript.ORDER_NONE];
  return code;
};
