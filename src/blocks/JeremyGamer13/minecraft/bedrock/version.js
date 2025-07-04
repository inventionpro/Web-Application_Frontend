import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_version';

const blockData = {
  message0: 'bedrock server version',
  args0: [],
  colour: 190,
  output: 'String',
  tooltip: 'Get the version of the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`result_bedrock.version`, JavaScript.ORDER_NONE];
  return code;
};
