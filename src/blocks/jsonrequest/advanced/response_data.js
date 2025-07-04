import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_response_data';
const blockData = {
  message0: 'response data',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [],
  output: null,
  tooltip: 'The data the server sent back.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`response.data`, JavaScript.ORDER_NONE];
  return code;
};
