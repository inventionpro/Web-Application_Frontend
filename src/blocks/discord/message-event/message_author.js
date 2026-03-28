import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_message_author';
const blockData = {
  message0: '%{BKY_MESSAGE_AUTHOR}',
  colour: '#187795',
  output: Types.User,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.author', javascriptGenerator.ORDER_NONE];
};
