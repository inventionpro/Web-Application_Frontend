import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'server_file';

const blockData = {
  type: 'block_type',
  message0: 'Load Server.js in your project!',
  args0: [],
  colour: '#3366ff',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = `//let serverjs = 'true';\n`;
  return code;
};
