import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'frost_json_to_string';
const blockData = {
  message0: 'Convert object/list %1 to json string',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: Types.Any
    }
  ],
  output: Types.String,
  colour: '#BA4A9A',
  tooltip: 'Converts Object/lists to a json string',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const code = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  return [`JSON.stringify(${code})`, javascriptGenerator.ORDER_NONE];
};
