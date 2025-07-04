import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'newmsg_timestamp';

const blockData = {
  message0: 'date of message edit',
  colour: '#5BA58C',
  tooltip: 'The time that the message was edited at.',
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['newMessage.editedAt', JavaScript.ORDER_NONE];
  return code;
};
