import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'fz_emoji_exist';

const blockData = {
  message0: 'emoji %1 exists?',
  args0: [
    {
      type: 'input_value',
      name: 'EMOJI',
      check: 'Emoji'
    }
  ],
  output: 'Boolean',
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
  const code = [`${emoji} !== undefined`, javascriptGenerator.ORDER_NONE];
  return code;
};
