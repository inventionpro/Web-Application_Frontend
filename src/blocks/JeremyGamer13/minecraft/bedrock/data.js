import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_data';

const blockData = {
  message0: 'bedrock data',
  args0: [],
  colour: 190,
  output: 'JSON',
  tooltip: 'All of the data the server has sent back. Can be stringified into a file and read with data blocks.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`result_bedrock`, javascriptGenerator.ORDER_NONE];
  return code;
};
