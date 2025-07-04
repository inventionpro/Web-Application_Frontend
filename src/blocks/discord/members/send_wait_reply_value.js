import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_send_wait_reply_dm_value';

const blockData = {
  message0: '%{BKY_SEND_WAIT_REPLY_DM_VALUE}',
  colour: '#5BA58C',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['s4d.reply', JavaScript.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_SEND_WAIT_REPL_DM_VALUE_PARENT',
    types: ['s4d_send_wait_reply_dm']
  }
]);
