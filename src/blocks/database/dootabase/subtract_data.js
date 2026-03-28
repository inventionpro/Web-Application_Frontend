import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_subtract_data2';
const blockData = {
  message0: 'In dootabase subtract %1 to %2',
  args0: [
    {
      type: 'input_value',
      name: 'COUNT',
      check: Types.Number
    },
    {
      type: 'input_value',
      name: 'KEY',
      check: T(Types.String, Types.Number)
    }
  ],
  nextStatement: null,
  previousStatement: null,
  colour: '#50a153',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'KEY', javascriptGenerator.ORDER_ATOMIC);
  const count = javascriptGenerator.valueToCode(block, 'COUNT', javascriptGenerator.ORDER_ATOMIC);
  return `dootabase.subtract(String(${key}), parseInt(${count}));`;
};
