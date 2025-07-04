import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = ['err', JavaScript.ORDER_NONE];
  return code;
};
