import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_request_advanced_response_data';
const blockData = {
  message0: 'response data',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [],
  output: Types.Any,
  tooltip: 'The data the server sent back.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['response.data', javascriptGenerator.ORDER_NONE];
};
