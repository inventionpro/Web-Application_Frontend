import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'react_messageId';

const blockData = {
  message0: 'Reacting Message id',
  colour: '#BC5CF0',
  output: 'String'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['reaction.message.id', javascriptGenerator.ORDER_NONE];
  return code;
};
