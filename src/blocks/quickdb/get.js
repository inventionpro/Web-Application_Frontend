import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'qdb_get';
const blockData = {
  message0: 'Get the value %1 from the SQLite DB',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: Types.String
    }
  ],
  output: Types.Any,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'KEY', javascriptGenerator.ORDER_ATOMIC);
  return [`await qdb.get(${key});`, javascriptGenerator.ORDER_ATOMIC];
};
