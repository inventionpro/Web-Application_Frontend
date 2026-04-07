import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'jg_minecraft_bedrock_version';
const blockData = {
  message0: 'bedrock server version',
  args0: [],
  colour: 190,
  output: Types.String,
  tooltip: 'Get the version of the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['result_bedrock.version', javascriptGenerator.ORDER_NONE];
};
