import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'id_btn_srv';

const blockData = {
  message0: 'button server',
  colour: '#33cc00',
  output: 'Server',
  tooltip: 'The server the buttons were posted in.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = ['(i.guild)', javascriptGenerator.ORDER_NONE];
  return code;
};
