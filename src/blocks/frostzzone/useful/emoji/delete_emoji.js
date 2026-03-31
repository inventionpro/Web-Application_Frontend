import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'fz_delete_emoji';
const blockData = {
  message0: 'Delete emoji %1',
  args0: [
    {
      type: 'input_value',
      name: 'EMOJI',
      check: Types.Emoji
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const emoji = javascriptGenerator.valueToCode(block, 'EMOJI', javascriptGenerator.ORDER_ATOMIC);
  return `${emoji}.delete();`;
};
