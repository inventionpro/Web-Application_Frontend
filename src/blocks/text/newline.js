import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 's4d_newline';
const blockData = {
  message0: '%{BKY_NEWLINE}',
  output: Types.String,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ["'\\n'", javascriptGenerator.ORDER_ATOMIC];
};
