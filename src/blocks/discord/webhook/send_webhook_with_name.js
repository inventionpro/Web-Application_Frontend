import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'gsa_jose_jg_webhooks_as_webhook_send_with_name_profile_picture_url';
const blockData = {
  message0: 'as webhook send %1 with name %2 profile picture URL %3',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'URL',
      check: Types.String
    }
  ],
  colour: '#135CC2',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Send a message as the created webhook, but with a different name and or profile picture.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const username = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const avatar = javascriptGenerator.valueToCode(block, 'URL', javascriptGenerator.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === Types.Embed[0])
      return `gwebhook.send({
  username: String(${username}),
  avatarURL: String(${avatar}),
  embeds: [${content}]
});`;
  }
  return `gwebhook.send({
  username: String(${username}),
  avatarURL: String(${avatar}),
  content: String(${content})
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: '$You need to specify what to send!',
    types: ['CONTENT']
  },
  {
    type: 'hasparent',
    message: '$You need to place this inside of a "get webhook then" block!',
    types: ['s4d_create_webhook_then', 's4d_get_webhook_then']
  }
]);
