import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'frost_env';
const blockData = {
  message0: 'process.env.%1',
  colour: '#3333ff',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: Types.String
    }
  ],
  tooltip: null,
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
  return [`process.env[String(${value})]`, javascriptGenerator.ORDER_NONE];
};
