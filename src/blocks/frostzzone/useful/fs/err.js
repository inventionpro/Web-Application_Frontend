import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'frost_fs_err';

const blockData = {
  message0: 'err',
  args0: [],
  output: ['Boolean', 'String'],
  colour: '#a5745b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['err', javascriptGenerator.ORDER_NONE];
  return code;
};
