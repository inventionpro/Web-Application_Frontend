import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_edit_webhook';

const blockData = {
  message0: '%{BKY_EDIT_WEBHOOK}',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'AVATAR',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: ['Channel']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const avatar = javascriptGenerator.valueToCode(block, 'AVATAR', javascriptGenerator.ORDER_ATOMIC);
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  return `webhook.edit({name:${name},avatar:${avatar},channel:${channel}.id});\n`;
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_CREATE_WEBHOOK_PARENT',
    types: ['s4d_create_webhook_then', 'jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do']
  }
]);
