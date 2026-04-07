import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'react_messageId';
const blockData = {
  message0: 'Reacting Message id',
  colour: '#BC5CF0',
  output: Types.String
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['reaction.message.id', javascriptGenerator.ORDER_NONE];
};
