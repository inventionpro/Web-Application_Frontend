import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'fz_emoji_exist';
const blockData = {
  message0: 'emoji %1 exists?',
  args0: [
    {
      type: 'input_value',
      name: 'EMOJI',
      check: Types.Emoji
    }
  ],
  output: Types.Boolean,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const emoji = javascriptGenerator.valueToCode(block, 'EMOJI', javascriptGenerator.ORDER_ATOMIC);
  return [`${emoji} !== undefined`, javascriptGenerator.ORDER_NONE];
};
