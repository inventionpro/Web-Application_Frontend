import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'send_m_embed_string';
const blockData = {
  message0: 'Send Embed',
  colour: '#40BF4A',
  tooltip: null,
  output: Types.Embed,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['{ embeds: [embed] }', javascriptGenerator.ORDER_NONE];
};
