import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'fz_unlock_emoji';

const blockData = {
  message0: 'Unlock emoji %1 to all roles',
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
  inputsInline: true,
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
  const code = `${emoji}.roles.set([]);\n`;
  return code;
};
