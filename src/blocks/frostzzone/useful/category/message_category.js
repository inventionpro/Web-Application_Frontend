import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  return [`s4dmessage.channel.parent`, JavaScript.ORDER_NONE];
};
