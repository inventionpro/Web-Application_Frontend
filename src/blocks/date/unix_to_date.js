import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'unix_to_date';
const blockData = {
  message0: 'unix %1 to date',
  args0: [
    {
      type: 'input_value',
      name: 'UNIX',
      check: Types.Number
    }
  ],
  output: Types.Date,
  colour: '#D14081',
  tooltip: 'Convert a UNIX timestamp to a date.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const unix = javascriptGenerator.valueToCode(block, 'UNIX', javascriptGenerator.ORDER_ATOMIC);
  return [`new Date(${unix} * 1000)`, javascriptGenerator.ORDER_NONE];
};
