import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_minecraft_java_favicon';
const blockData = {
  message0: 'java favicon data URI',
  args0: [],
  colour: 120,
  output: Types.String,
  tooltip: 'Get the favicon of the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['result_java.favicon', javascriptGenerator.ORDER_NONE];
};
