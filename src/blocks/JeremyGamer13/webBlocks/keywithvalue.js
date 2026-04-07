import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_keywithvalue';
const blockData = {
  message0: 'Key with value %1 in data file',
  args0: [
    {
      type: 'input_value',
      name: 'key',
      check: Types.Any
    }
  ],
  output: Types.String,
  colour: 230,
  tooltip: 'Get the key with the value in a JSON file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'key', javascriptGenerator.ORDER_ATOMIC);
  return [`Object.keys(JSONdataS4D)[Object.values(JSONdataS4D).indexOf(${key})]`, javascriptGenerator.ORDER_NONE];
};
