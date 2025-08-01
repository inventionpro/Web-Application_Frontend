import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_webhook_id';

const blockData = {
  message0: '%{BKY_WEBHOOK_ID}',
  args0: [],
  colour: '#2EB66B',
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
  return [`webhook.id`, JavaScript.ORDER_NONE];
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_CREATE_WEBHOOK_PARENT',
    types: ['s4d_create_webhook_then', 'jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do']
  }
]);
