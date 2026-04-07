import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_minecraft_java_data';
const blockData = {
  message0: 'java data',
  args0: [],
  colour: 120,
  output: Types.Object,
  tooltip: 'All of the data the server has sent back. Can be stringified into a file and read with data blocks.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['result_java', javascriptGenerator.ORDER_NONE];
};
