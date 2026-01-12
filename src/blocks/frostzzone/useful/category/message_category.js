import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'frost_message_category';

const blockData = {
  message0: 'message channel category',
  args0: [],
  output: 'Category',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  return [`s4dmessage.channel.parent`, javascriptGenerator.ORDER_NONE];
};
