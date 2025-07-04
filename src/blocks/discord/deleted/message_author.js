import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_message_author_deleted';

const blockData = {
  message0: '%{BKY_MESSAGE_AUTHOR}',
  colour: '#5BA58C',
  tooltip: '',
  output: 'Member',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4dmessage.member.user', JavaScript.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_DELETED',
    types: ['s4d_on_deleted']
  }
]);
