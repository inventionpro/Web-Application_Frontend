import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'weird-to-normal';
const blockData = {
  message0: 'weird char to normal %1',
  args0: [
    {
      type: 'input_value',
      name: 'CHAR',
      check: Types.String
    }
  ],
  output: Types.String,
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
  const string = javascriptGenerator.valueToCode(block, 'CHAR', javascriptGenerator.ORDER_ATOMIC);
  return [`weirdToNormalChars(${string})`, javascriptGenerator.ORDER_NONE];
};
