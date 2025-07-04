import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const emoji = JavaScript.valueToCode(block, 'EMOJI', JavaScript.ORDER_ATOMIC);
  const code = [`${emoji} !== undefined`, JavaScript.ORDER_NONE];
  return code;
};
