import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'mongo_get_data';
const blockData = {
  message0: '%{BKY_GET_DATA}',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: T(Types.String, Types.Number)
    }
  ],
  output: Types.Any,
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
  return [`(await(mdb.get(${key})))`, javascriptGenerator.ORDER_ATOMIC];
};
