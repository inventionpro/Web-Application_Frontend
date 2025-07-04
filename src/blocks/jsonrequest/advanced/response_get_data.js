import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_get_response_data';
const blockData = {
  message0: 'get %1 from response data',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: ['String', 'var', 'Env']
    }
  ],
  output: null,
  tooltip: 'Get a certain thing from the response data.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC).replaceAll("'", '').replaceAll('"', '');
  const code = [`response.data.${value}`, JavaScript.ORDER_NONE];
  return code;
};
