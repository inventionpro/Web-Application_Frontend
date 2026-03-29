import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jose_jg_s4d_as_webhook_send_with_allowed_mentions_on_lists_user_ids_role_ids';
const blockData = {
  message0: 'as webhook send %1 with allowed mentions on lists %2 user IDs %3 role IDs %4',
  inputsInline: false,
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'USERS',
      check: Types.Array
    },
    {
      type: 'input_value',
      name: 'ROLES',
      check: Types.Array
    }
  ],
  colour: '#135cc2',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Send a webhook, but only mention the users and roles with the IDs in the lists. If it is an empty list, nothing gets pinged. If there is no list, pings are on for all mentions.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);

  const users = javascriptGenerator.valueToCode(block, 'USERS', javascriptGenerator.ORDER_ATOMIC);
  const roles = javascriptGenerator.valueToCode(block, 'ROLES', javascriptGenerator.ORDER_ATOMIC);
  let usableA = '';
  let usableB = '';
  if (!(users === null || users === '')) usableA = `users: ${users},`;
  if (!(roles === null || roles === '')) usableB = `roles: ${roles},`;

  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === Types.Embed[0]) return `gwebhook.send({
  embeds: [${content}],
  allowedMentions: {
    ${usableA}
    ${usableB}
  }
});`;
  }
  return `gwebhook.send({
  content: String(${content}),
  allowedMentions: {
    ${usableA}
    ${usableB}
  }
});`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_WEBHOOK_PARENT',
    types: ['s4d_get_webhook_then']
  }
]);
