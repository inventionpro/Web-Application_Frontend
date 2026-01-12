import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_null';

const blockData = {
  message0: 'null',
  args0: [],
  output: 'Number',
  colour: '#FF0000',
  tooltip: 'Returns as null.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`null`, javascriptGenerator.ORDER_NONE];
  return code;
};
