import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_edition';

const blockData = {
  message0: 'bedrock server world name',
  args0: [],
  colour: 190,
  output: 'String',
  tooltip: 'Checks what the servers world name is.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`result_bedrock.map`, JavaScript.ORDER_NONE];
  return code;
};
