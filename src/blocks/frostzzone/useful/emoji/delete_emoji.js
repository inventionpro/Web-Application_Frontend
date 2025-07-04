import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'fz_delete_emoji';

const blockData = {
  message0: 'Delete emoji %1',
  args0: [
    {
      type: 'input_value',
      name: 'EMOJI',
      check: ['Emoji']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
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
  const code = `${emoji}.delete();\n`;
  return code;
};
