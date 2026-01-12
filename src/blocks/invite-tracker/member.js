import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'Member';

const blockData = {
  message0: 'Member',
  colour: '#187795',
  output: 'Member',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['member', javascriptGenerator.ORDER_NONE];
  return code;
};
