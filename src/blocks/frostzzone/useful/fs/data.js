import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_fs_data';

const blockData = {
  message0: 'Data',
  args0: [],
  output: 'String',
  colour: '#a5745b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['data', JavaScript.ORDER_NONE];
  return code;
};
