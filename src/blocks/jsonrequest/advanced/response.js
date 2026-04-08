import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_request_advanced_response';
const blockData = {
  message0: 'response json',
  inputsInline: true,
  colour: '#4C97FF',
  args0: [],
  output: Types.Object,
  tooltip: "A JSON containing the server's response. Can be saved into a file if stringified and read with Data blocks.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['response', javascriptGenerator.ORDER_NONE];
};
