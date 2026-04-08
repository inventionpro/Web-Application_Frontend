import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_request_advanced_response_headers';
const blockData = {
  message0: 'response headers',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [],
  output: Types.Object,
  tooltip: "A JSON containing the server's headers. Can be saved into a file if stringified.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['response.headers', javascriptGenerator.ORDER_NONE];
};
