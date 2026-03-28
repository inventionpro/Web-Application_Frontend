import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'ahq_embed_is';
const blockData = {
  message0: 'Is there embed on message %1 ?',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: Types.Message
    }
  ],
  colour: '#40BF4A',
  output: Types.Boolean,
  tooltip: 'Checks if a message has an embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const a = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC).replace('.user', '').replace('.author', '.member');
  return [`${a}.embeds[0]`, javascriptGenerator.ORDER_NONE];
};
