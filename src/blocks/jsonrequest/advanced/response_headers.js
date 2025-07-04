import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_response_headers';
const blockData = {
  message0: 'response headers',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [],
  output: ['Object', 'JSON'],
  tooltip: "A JSON containing the server's headers. Can be saved into a file if stringified.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`response.headers`, JavaScript.ORDER_NONE];
  return code;
};
