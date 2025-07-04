import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'cpu';

const blockData = {
  message0: 'Cpu Usage',
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
  const code = ['obj', JavaScript.ORDER_NONE];
  return code;
};
