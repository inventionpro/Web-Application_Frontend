import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_response_status';
const blockData = {
  message0: 'response status code',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [],
  output: 'Number',
  tooltip: "A number with the server's status code. Right-click and check the Help button for HTTP status codes.",
  helpUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`response.status`, JavaScript.ORDER_NONE];
  return code;
};
