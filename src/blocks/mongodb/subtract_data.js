import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'mongo_subtract_data';
const blockData = {
  message0: '%{BKY_SUBTRACT_DATA}',
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
  colour: '#4fc99e',
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
  return `mdb.subtract(${key}, ${count});`;
};
