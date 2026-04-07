import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_valueofkey';
const blockData = {
  message0: 'Value of key %1 in data file',
  args0: [
    {
      type: 'input_value',
      name: 'key',
      check: Types.String
    }
  ],
  output: Types.Any,
  colour: 230,
  tooltip: 'Get the value of a key in a JSON file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'key', javascriptGenerator.ORDER_ATOMIC);
  return [`JSONdataS4D[String(${key})]`, javascriptGenerator.ORDER_NONE];
};
