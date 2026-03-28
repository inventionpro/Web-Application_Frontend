import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_message_content';
const blockData = {
  message0: '%{BKY_MESSAGE_CONTENT}',
  colour: '#5BA58C',
  tooltip: '',
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.content', javascriptGenerator.ORDER_NONE];
};
