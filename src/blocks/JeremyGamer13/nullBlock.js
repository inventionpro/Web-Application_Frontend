import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'jg_null';
const blockData = {
  message0: 'null',
  args0: [],
  output: Types.Any, // TODO: Keep any type?
  colour: '#FF0000',
  tooltip: 'Returns as null.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['null', javascriptGenerator.ORDER_NONE];
};
