import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
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
JavaScript[blockName] = function () {
  const code = ['(i.guild)', JavaScript.ORDER_NONE];
  return code;
};
