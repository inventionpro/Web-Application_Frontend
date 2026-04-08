import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_request_advanced_get_response_data';
const blockData = {
  message0: 'get %1 from response data',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: Types.String
    }
  ],
  output: Types.Any,
  tooltip: 'Get a certain thing from the response data.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC).replaceAll("'", '').replaceAll('"', '');
  return [`response.data.${value}`, javascriptGenerator.ORDER_NONE];
};
