import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'ahqq_ahq_modal';

const blockData = {
  message0: 'Send jose/redo embeds',
  args0: [],
  output: 'ahq_type',
  colour: '#40BF4A'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = [`embed`, javascriptGenerator.ORDER_NONE];
  return code;
};
