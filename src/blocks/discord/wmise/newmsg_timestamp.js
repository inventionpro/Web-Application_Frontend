import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'newmsg_timestamp';
const blockData = {
  message0: 'date of message edit',
  colour: '#5BA58C',
  tooltip: 'The time that the message was edited at.',
  output: Types.Date,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['newMessage.editedAt', javascriptGenerator.ORDER_NONE];
};
