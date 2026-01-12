import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_java_favicon';

const blockData = {
  message0: 'java favicon data URI',
  args0: [],
  colour: 120,
  output: ['ImageDataURI', 'String'],
  tooltip: 'Get the favicon of the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`result_java.favicon`, javascriptGenerator.ORDER_NONE];
  return code;
};
