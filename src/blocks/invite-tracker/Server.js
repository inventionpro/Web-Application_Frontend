import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'Server';

const blockData = {
  message0: 'Server',
  colour: '#187795',
  output: 'Server',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['member.guild', JavaScript.ORDER_NONE];
  return code;
};
