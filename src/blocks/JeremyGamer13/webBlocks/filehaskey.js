import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_haskey';
const blockData = {
  message0: 'Data file has key %1?',
  args0: [
    {
      type: 'input_value',
      name: 'key',
      check: Types.String
    }
  ],
  output: Types.Boolean,
  colour: 230,
  tooltip: 'Checks if a key exists in the current data file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'key', javascriptGenerator.ORDER_ATOMIC);
  return [`(JSONdataS4D.hasOwnProperty(${key})) == true`, javascriptGenerator.ORDER_NONE];
};
