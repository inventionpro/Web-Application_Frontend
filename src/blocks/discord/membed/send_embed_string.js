import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'send_m_embed_string';

const blockData = {
  message0: 'Send Embed',
  colour: '#40BF4A',
  tooltip: null,
  output: 'Embed',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['embed\n', JavaScript.ORDER_NONE];
  return code;
};
