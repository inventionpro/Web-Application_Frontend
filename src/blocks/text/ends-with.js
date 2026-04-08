import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 's4d_ends_with';
const blockData = {
  message0: '%1 ends with %2',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'SUBSTRING',
      check: Types.String
    }
  ],
  output: Types.Boolean,
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const string = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  const substring = javascriptGenerator.valueToCode(block, 'SUBSTRING', javascriptGenerator.ORDER_ATOMIC);
  return [`(${string} || '').endsWith(${substring} || '')`, javascriptGenerator.ORDER_NONE];
};
