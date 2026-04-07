import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'jg_undefined';
const blockData = {
  message0: 'undefined',
  args0: [],
  output: Types.Any, // TODO: Reconsider
  colour: '#FF0000',
  tooltip: 'Returns as undefined.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['undefined', javascriptGenerator.ORDER_NONE];
};
