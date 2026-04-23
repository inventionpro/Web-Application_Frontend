import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import * as blocklyModule from '../blocklyModule.js';
import { registerRestrictions } from '../../restrictions.js';
import { T, Types } from '../types.js';

const restrictToParent = function (parents, name, msg) {
  registerRestrictions(name, [
    {
      type: 'hasparent',
      message: '$' + msg,
      types: parents
    }
  ]);
};

Blockly.Blocks['jg_messages_id_of_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'ID of message %1',
      args0: [
        {
          type: 'input_value',
          name: 'MSG',
          check: Types.Message
        }
      ],
      colour: '#4C97FF',
      output: Types.String,
      tooltip: 'Get the message ID from the message.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_messages_id_of_message'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MSG', javascriptGenerator.ORDER_ATOMIC);
  return [`${message}.id`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_messages_message_is_value'] = {
  init: function () {
    this.jsonInit({
      message0: 'message %1 %2',
      args0: [
        {
          type: 'input_value',
          name: 'MSG',
          check: Types.Message
        },
        {
          type: 'field_grid_dropdown',
          name: 'TYPE',
          options: [
            ['mentions everyone?', 'mentions.everyone'],
            ['mentions members?', 'mentions.users != null && ^{MSG_INPUT}mentions.users.size > 0'],
            ['mentions roles?', 'mentions.roles != null && ^{MSG_INPUT}mentions.roles.size > 0 || ^{MSG_INPUT}mentions._roles != null && ^{MSG_INPUT}mentions._roles.size > 0'],
            ['mentions channels?', 'mentions.channels != null && ^{MSG_INPUT}mentions.channels.size > 0'],
            ['is a system message?', 'system'],
            ['is pinned?', 'pinned'],
            ['is text to speech?', 'tts'],
            ['is edited?', 'editedTimestamp != null'],
            ['is from webhook?', 'webhookId != null'],
            ['is a reply?', 'type == "REPLY"'],
            ['has embeds?', 'embeds != null && ^{MSG_INPUT}embeds.length > 0'],
            ['has buttons or menus?', 'components != null && ^{MSG_INPUT}components.length > 0'],
            ['has attachments?', 'attachments != null && ^{MSG_INPUT}attachments.size > 0'],
            ['has stickers?', 'stickers != null && ^{MSG_INPUT}stickers.size > 0'],
            ['has thread?', 'hasThread'],
            ['can be deleted by the bot?', 'deletable'],
            ['can be crossposted by the bot?', 'crosspostable'],
            ['can be edited by the bot?', 'editable'],
            ['can be pinned by the bot?', 'pinnable']
          ]
        }
      ],
      colour: '#4C97FF',
      output: Types.Boolean,
      tooltip: 'Check if a message is a message with this property.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_messages_message_is_value'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MSG', javascriptGenerator.ORDER_ATOMIC);
  const property = block.getFieldValue('TYPE').replaceAll('^{MSG_INPUT}', message + '.');
  return [`${message}.${property}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_messages_message_webhook_id'] = {
  init: function () {
    this.jsonInit({
      message0: 'message %1 webhook ID',
      args0: [
        {
          type: 'input_value',
          name: 'MSG',
          check: Types.Message
        }
      ],
      colour: '#4C97FF',
      output: Types.String,
      tooltip: "Get a message's webhook ID, if it has one.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_messages_message_webhook_id'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MSG', javascriptGenerator.ORDER_ATOMIC);
  return [`${message}.webhookId`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_channel_get_last_messages_in_channel_then'] = {
  init: function () {
    this.jsonInit({
      message0: 'get last %1 messages in channel %2 then %3 %4',
      args0: [
        {
          type: 'input_value',
          name: 'AMOUNT',
          check: Types.Number
        },
        {
          type: 'input_value',
          name: 'CHANNEL',
          check: Types.Channel
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ],
      colour: '#a55b80',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Get the last number of messages in the channel and run the blocks below.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_channel_get_last_messages_in_channel_then'] = (block) => {
  const amount = javascriptGenerator.valueToCode(block, 'AMOUNT', javascriptGenerator.ORDER_ATOMIC);
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `${channel}.messages.fetch({ limit: ${amount} }).then(async (last_messages_in_channel) => {
  ${statements}
});`;
};

Blockly.Blocks['jg_channel_last_message_number'] = {
  init: function () {
    this.jsonInit({
      message0: 'last message #%1',
      args0: [
        {
          type: 'input_value',
          name: 'INDEX',
          check: Types.Number
        }
      ],
      colour: '#4C97FF',
      output: Types.Message,
      tooltip: 'Get the last message at the index in the channel.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_channel_last_message_number'] = (block) => {
  const index = javascriptGenerator.valueToCode(block, 'INDEX', javascriptGenerator.ORDER_ATOMIC);
  return [`last_messages_in_channel.at(${index} - 1)`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions('jg_channel_last_message_number', [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "get last messages in channel then" block!',
    types: ['jg_channel_get_last_messages_in_channel_then']
  }
]);

Blockly.Blocks['jg_message_user_replied_to_in_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'user replied to in message %1',
      args0: [
        {
          type: 'input_value',
          name: 'MSG',
          check: Types.Message
        }
      ],
      colour: '#4C97FF',
      output: Types.Member,
      tooltip: 'Get the user that was replied to in the message.',
      helpUrl: ''
    });
  }
};
javascriptGenerator.forBlock['jg_message_user_replied_to_in_message'] = (block) => {
  const msg = javascriptGenerator.valueToCode(block, 'MSG', javascriptGenerator.ORDER_ATOMIC);
  return [`${msg}.mentions.repliedUser`, javascriptGenerator.ORDER_NONE];
};

// Attachment Blocks
Blockly.Blocks['jg_attachment_amount_of_attachments_on_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'amount of attachments on message %1',
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        }
      ],
      colour: '#187795',
      output: Types.Number,
      tooltip: 'Get the number of attachments on a message.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_attachment_amount_of_attachments_on_message'] = (block) => {
  const msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return [`${msg}.attachments.size`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_attachment_get_attachment_number'] = {
  init: function () {
    this.jsonInit({
      message0: 'get attachment #%1 on message %2',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'INDEX',
          check: Types.Number
        },
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        }
      ],
      colour: '#187795',
      output: 'Attachment',
      tooltip: 'Get the specific attachment on the message.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_attachment_get_attachment_number'] = (block) => {
  const index = javascriptGenerator.valueToCode(block, 'INDEX', javascriptGenerator.ORDER_ATOMIC);
  const msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return [`${msg}.attachments.at(Number(${index}) - 1)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_attachment_get_attachment_property'] = {
  init: function () {
    this.jsonInit({
      message0: 'get %2 from attachment %1',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'ATTACH',
          check: 'Attachment'
        },
        {
          type: 'field_dropdown',
          name: 'PROPERTY',
          options: [
            ['URL', 'url'],
            ['name', 'name'],
            ['size (in bytes)', 'size'],
            ['MIME type', 'contentType'],
            ['hidden', 'ephemeral'],
            ['ID', 'id'],
            ['is spoiler?', 'spoiler'],
            ['width (type dependent)', 'attachments.size > 0'],
            ['height (type dependent)', 'stickers.size > 0']
          ]
        }
      ],
      colour: '#187795',
      output: Types.Any,
      tooltip: 'Get the specific property from the attachment. You can see what MIME types apply to what file extension by Right Clicking on the block and pressing "Help". Width and Height only apply to certain types of attachment types.',
      helpUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types'
    });
  }
};

javascriptGenerator.forBlock['jg_attachment_get_attachment_property'] = (block) => {
  const property = block.getFieldValue('PROPERTY');
  const attach = javascriptGenerator.valueToCode(block, 'ATTACH', javascriptGenerator.ORDER_ATOMIC);
  return [`${attach}.${property}`, javascriptGenerator.ORDER_NONE];
};

// back to normal shit
Blockly.Blocks['jg_message_mentioned_member_number_on_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'get mentioned %3 #%1 on message %2',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'INDEX',
          check: Types.Number
        },
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['member', 'users'],
            ['role', 'roles'],
            ['channel', 'channels']
          ]
        }
      ],
      colour: '#187795',
      output: T(Types.Member, Types.Role, Types.Channel),
      tooltip: 'Get a specific mentioned member, role or channel on the message.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_message_mentioned_member_number_on_message'] = (block) => {
  const index = javascriptGenerator.valueToCode(block, 'INDEX', javascriptGenerator.ORDER_ATOMIC);
  const msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  return [`${msg}.mentions.${type}.at(Number(${index}) - 1)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_message_amount_of_mentioned_members_on_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'amount of mentioned %2 on message %1',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['members', 'users'],
            ['roles', 'roles'],
            ['channels', 'channels']
          ]
        }
      ],
      colour: '#187795',
      output: Types.Number,
      tooltip: 'Get the amount of members, roles, or channels mentioned in a message.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_message_amount_of_mentioned_members_on_message'] = (block) => {
  const msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  return [`${msg}.mentions.${type}.size`, javascriptGenerator.ORDER_NONE];
};

// T Y P I N G
// B L O C K S
Blockly.Blocks['jg_typing_typing_attribute'] = {
  init: function () {
    this.jsonInit({
      message0: 'typing %1',
      inputsInline: true,
      args0: [
        {
          type: 'field_dropdown',
          name: 'ATT',
          options: [
            ['server member', 'member'],
            ['user', 'user'],
            ['channel', 'channel'],
            ['server', 'guild'],
            ['started time (UNIX)', 'startedAt'],
            ['is in a server?', '123']
          ]
        }
      ],
      colour: '#1392ed',
      output: Types.Any,
      tooltip: 'Grab information about someone typing.',
      helpUrl: ''
    });
  },
  onchange: function () {
    switch (String(this.getFieldValue('ATT'))) {
      case 'member':
        this.setOutput(true, Types.Member);
        break;
      case 'user':
        this.setOutput(true, Types.User);
        break;
      case 'channel':
        this.setOutput(true, Types.Channel);
        break;
      case 'guild':
        this.setOutput(true, Types.Server);
        break;
      case 'startedAt':
        this.setOutput(true, Types.Number);
        break;
      case '123':
        this.setOutput(true, Types.Boolean);
        break;
    }
  }
};

javascriptGenerator.forBlock['jg_typing_typing_attribute'] = (block) => {
  const type = block.getFieldValue('ATT');
  if (type == 123) {
    return [`s4dTyping.inGuild()`, javascriptGenerator.ORDER_NONE];
  } else {
    return [`s4dTyping.${type}`, javascriptGenerator.ORDER_NONE];
  }
};

Blockly.Blocks['jg_status_does_member_have_a_status_for_device'] = {
  init: function () {
    this.jsonInit({
      message0: 'does member %1 have a status for discord %2?',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['desktop app', 'desktop'],
            ['website', 'web'],
            ['mobile app', 'mobile']
          ]
        }
      ],
      colour: '#187795',
      output: Types.Boolean,
      tooltip: "Can be used to see what devices the member is using. If the member is not using the device, it'll be false.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_status_does_member_have_a_status_for_device'] = (block) => {
  var member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  if (member.endsWith('.user')) member = member.substring(0, member.length - 5);
  if (member.endsWith('.user)')) member = member.substring(0, member.length - 6) + ')';
  const type = block.getFieldValue('TYPE');
  return [`${member}.presence.clientStatus.${type} != null`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_status_member_status_on_discord'] = {
  init: function () {
    this.jsonInit({
      message0: 'member %1 status on discord %2',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['desktop app', 'desktop'],
            ['website', 'web'],
            ['mobile app', 'mobile']
          ]
        }
      ],
      colour: '#187795',
      output: Types.String,
      tooltip: 'Can be used to see what devices the member is using. This can be online, idle, or dnd.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_status_member_status_on_discord'] = (block) => {
  var member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  if (member.endsWith('.user')) member = member.substring(0, member.length - 5);
  if (member.endsWith('.user)')) member = member.substring(0, member.length - 6) + ')';
  const type = block.getFieldValue('TYPE');
  return [`${member}.presence.clientStatus.${type}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles'] = {
  init: function () {
    this.jsonInit({
      message0: 'reply %1 with allowed list of pings %2 on user IDs %3 on role IDs %4',
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
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Send a message but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles'] = (block) => {
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const users = javascriptGenerator.valueToCode(block, 'USERS', javascriptGenerator.ORDER_ATOMIC);
  const roles = javascriptGenerator.valueToCode(block, 'ROLES', javascriptGenerator.ORDER_ATOMIC);
  var usableA = '';
  var usableB = '';
  if (!(users === null || users === '')) usableA = `users: ${users},`;
  if (!(roles === null || roles === '')) usableB = `roles: ${roles},`;
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType)) {
      return `s4dmessage.channel.send({
  allowedMentions: {
    ${usableA}
    ${usableB}
  },
  ...${content}
});`;
    }
  }
  return `s4dmessage.channel.send({
  content: String(${content}),
  allowedMentions: {
    ${usableA}
    ${usableB}
  }
});`;
};

registerRestrictions('jg_messages_reply_with_allowed_list_of_pings_on_users_on_roles', [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot']
  }
]);

Blockly.Blocks['jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles'] = {
  init: function () {
    this.jsonInit({
      message0: 'respond with %1 and with allowed list of pings %2 on user IDs %3 on role IDs %4',
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
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Send a message but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles'] = (block) => {
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const users = javascriptGenerator.valueToCode(block, 'USERS', javascriptGenerator.ORDER_ATOMIC);
  const roles = javascriptGenerator.valueToCode(block, 'ROLES', javascriptGenerator.ORDER_ATOMIC);
  var usableA = '';
  var usableB = '';
  if (!(users === null || users === '')) usableA = `users: ${users},`;
  if (!(roles === null || roles === '')) usableB = `roles: ${roles},`;
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType))
      return `s4dmessage.channel.send({
  allowedMentions: {
    ${usableA}
    ${usableB}
  },
  ...${content}
});`;
  }
  return `s4dmessage.channel.send({
  content: String(${content}),
  allowedMentions: {
    ${usableA}
    ${usableB}
  }
});`;
};

registerRestrictions('jg_messages_respond_with_and_with_allowed_list_of_pings_on_users_on_roles', [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot']
  }
]);

Blockly.Blocks['jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles'] = {
  init: function () {
    this.jsonInit({
      message0: 'send %1 in channel %2 with allowed list of pings %3 on user IDs %4 on role IDs %5',
      inputsInline: false,
      args0: [
        {
          type: 'input_value',
          name: 'CONTENT',
          check: Types.MessageContent
        },
        {
          type: 'input_value',
          name: 'CHANNEL',
          check: Types.Channel
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
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Send a message in a specific channel but only ping the members and roles with the IDs in the list. If you dont want to ping anyone or any roles, just put an empty list. If you want to ping all members or all roles, just leave the input empty with no block there.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles'] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const users = javascriptGenerator.valueToCode(block, 'USERS', javascriptGenerator.ORDER_ATOMIC);
  const roles = javascriptGenerator.valueToCode(block, 'ROLES', javascriptGenerator.ORDER_ATOMIC);
  var usableA = '';
  var usableB = '';
  if (!(users === null || users === '')) usableA = `users: ${users},`;
  if (!(roles === null || roles === '')) usableB = `roles: ${roles},`;
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType))
      return `${channel}.send({
  allowedMentions: {
    ${usableA}
    ${usableB}
  },
  ...${content}
});`;
  }
  return `${channel}.send({
  content: String(${content}),
  allowedMentions: {
    ${usableA}
    ${usableB}
  }
});`;
};

registerRestrictions('jg_channels_send_in_channel_with_allowed_list_of_pings_on_users_on_roles', [
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CHANNEL',
    types: ['CHANNEL']
  }
]);

Blockly.Blocks['jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot'] = {
  init: function () {
    this.jsonInit({
      message0: "When a message is recieved & author isn't a bot %1 %2",
      colour: '#f79400',
      args0: [
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ]
    });
  }
};
javascriptGenerator.forBlock['jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot'] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `s4d.client.on(Discord.Events.MessageCreate, async (s4dmessage) => {
  if (s4dmessage.author.bot) return;
  ${statements}
});`;
};

Blockly.Blocks['jg_unused_floating_comment'] = {
  init: function () {
    this.jsonInit({
      message0: 'ㅤ%1ㅤ',
      colour: '#DDAA00',
      args0: [
        {
          type: 'field_multilinetext',
          name: 'TEXT',
          spellcheck: false
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_unused_floating_comment'] = function () {
  return '';
};

Blockly.Blocks['jg_comments_floating_arrow'] = {
  init: function () {
    let imgsize = 64;
    this.jsonInit({
      message0: '%1',
      colour: '#DDAA00',
      args0: [
        {
          type: 'field_dropdown',
          name: 'arrow',
          options: [
            [
              {
                src: '/arrows/down.png',
                width: imgsize,
                height: imgsize,
                alt: 'down'
              },
              'down'
            ],
            [
              {
                src: '/arrows/up.png',
                width: imgsize,
                height: imgsize,
                alt: 'up'
              },
              'up'
            ],
            [
              {
                src: '/arrows/right.png',
                width: imgsize,
                height: imgsize,
                alt: 'right'
              },
              'right'
            ],
            [
              {
                src: '/arrows/left.png',
                width: imgsize,
                height: imgsize,
                alt: 'left'
              },
              'left'
            ],
            [
              {
                src: '/arrows/dleft.png',
                width: imgsize,
                height: imgsize,
                alt: 'down left'
              },
              'down_left'
            ],
            [
              {
                src: '/arrows/dright.png',
                width: imgsize,
                height: imgsize,
                alt: 'down right'
              },
              'down_right'
            ],
            [
              {
                src: '/arrows/uleft.png',
                width: imgsize,
                height: imgsize,
                alt: 'up left'
              },
              'up_left'
            ],
            [
              {
                src: '/arrows/uright.png',
                width: imgsize,
                height: imgsize,
                alt: 'up right'
              },
              'up_right'
            ]
          ]
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_comments_floating_arrow'] = function () {
  return '';
};

Blockly.Blocks['jg_comments_floating_image'] = {
  init: function () {
    this.appendDummyInput().appendField('Image URL:').appendField(new Blockly.FieldTextInput('/load.png'), 'TEXT');
    this.appendDummyInput().appendField(new Blockly.FieldImage('/load.png', 512, 512, { alt: 'Custom Image', flipRtl: 'FALSE' }), 'IMG');
    this.setInputsInline(false);
    this.setColour('#DDAA00');
    this.setTooltip('');
    this.setHelpUrl('');
  },

  onchange: function () {
    let url = String(this.getFieldValue('TEXT'));
    this.getField('IMG').setValue(url);
    this.setTooltip('An image comment using url ' + url + '.');
  }
};

javascriptGenerator.forBlock['jg_comments_floating_image'] = function () {
  return '';
};

Blockly.Blocks['jg_comments_connected_comment'] = {
  init: function () {
    this.jsonInit({
      message0: 'ㅤ%1ㅤ',
      colour: '#DDAA00',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'field_multilinetext',
          name: 'TEXT',
          spellcheck: false
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_comments_connected_comment'] = (block) => {
  var text = block.getFieldValue('TEXT');
  text = text.replaceAll('*/', '* /');
  return `/*
  ${text}
*/`;
};

Blockly.Blocks['jg_comments_connected_arrow'] = {
  init: function () {
    let imgsize = 64;
    this.jsonInit({
      message0: '%1',
      colour: '#DDAA00',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'field_dropdown',
          name: 'arrow',
          options: [
            [
              {
                src: '/arrows/down.png',
                width: imgsize,
                height: imgsize,
                alt: 'down'
              },
              'down'
            ],
            [
              {
                src: '/arrows/up.png',
                width: imgsize,
                height: imgsize,
                alt: 'up'
              },
              'up'
            ],
            [
              {
                src: '/arrows/right.png',
                width: imgsize,
                height: imgsize,
                alt: 'right'
              },
              'right'
            ],
            [
              {
                src: '/arrows/left.png',
                width: imgsize,
                height: imgsize,
                alt: 'left'
              },
              'left'
            ],
            [
              {
                src: '/arrows/dleft.png',
                width: imgsize,
                height: imgsize,
                alt: 'down left'
              },
              'down_left'
            ],
            [
              {
                src: '/arrows/dright.png',
                width: imgsize,
                height: imgsize,
                alt: 'down right'
              },
              'down_right'
            ],
            [
              {
                src: '/arrows/uleft.png',
                width: imgsize,
                height: imgsize,
                alt: 'up left'
              },
              'up_left'
            ],
            [
              {
                src: '/arrows/uright.png',
                width: imgsize,
                height: imgsize,
                alt: 'up right'
              },
              'up_right'
            ]
          ]
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_comments_connected_arrow'] = (block) => {
  let arrow = block.getFieldValue('arrow');
  return `/*
  ${arrow}
*/`;
};

Blockly.Blocks['jg_comments_connected_image'] = {
  init: function () {
    this.appendDummyInput().appendField('Image URL:').appendField(new Blockly.FieldTextInput('/load.png'), 'TEXT');
    this.appendDummyInput().appendField(new Blockly.FieldImage('/load.png', 512, 256, { alt: 'Custom Image', flipRtl: 'FALSE' }), 'IMG');
    this.setInputsInline(false);
    this.setColour('#DDAA00');
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },

  onchange: function () {
    let url = String(this.getFieldValue('TEXT'));
    this.getField('IMG').setValue(url);
    this.setTooltip('An image comment using url ' + url + '.');
  }
};

javascriptGenerator.forBlock['jg_comments_connected_image'] = (block) => {
  let url = block.getFieldValue('TEXT');
  return `/*
  Image URL:
  ${url.replaceAll('*/', '* /')}
*/`;
};

Blockly.Blocks['jg_events_all_label'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 %2 %3 %4 %5 %6',
      args0: [
        {
          type: 'field_multilinetext',
          name: 'LABEL',
          text: 'Label this event...'
        },
        {
          type: 'field_colour',
          name: 'COLOR',
          colour: '#ffcc00'
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'field_dropdown',
          name: 'EVENT',
          options: [
            ['When the code runs', '^empty'],
            ['When the bot is connected', 's4d.client.on(Discord.Events.ClientReady, async () => {'],
            ['When a message is received', 's4d.client.on(Discord.Events.MessageCreate, async (s4dmessage) => {'],
            [
              "When a message is received & author isn't bot",
              `s4d.client.on(Discord.Events.MessageCreate, async (s4dmessage) => {
if (s4dmessage.author.bot) return;`
            ],
            ['When a message is edited', 's4d.client.on(Discord.Events.MessageUpdate, async (oldMessage, newMessage) => {'],
            ['When a message is deleted', 's4d.client.on(Discord.Events.MessageDelete, async (s4dmessage) => {'],
            ['When someone starts typing', 's4d.client.on(Discord.Events.TypingStart, async (s4dTyping) => {'],
            [
              'When thread message is received',
              `s4d.client.on(Discord.Events.MessageCreate, async (s4dThread) => {
if (s4dThread.channel.type !== Discord.ChannelType.PublicThread) return;`
            ],
            [
              'When a slash command is received',
              `s4d.client.on(Discord.Events.InteractionCreate, async (interaction) => {
let member = interaction.guild.members.cache.get(interaction.member.user.id);`
            ],
            ['When the bot is added to a server', 's4d.client.on(Discord.Events.GuildCreate, async (s4dguild) => {'],
            ['When the bot is removed from a server', 's4d.client.on(Discord.Events.GuildDelete, async (s4dguild) => {']
          ]
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ],
      inputsInline: false,
      colour: '#000000',
      tooltip: 'Run the blocks inside when the specified event happens.',
      helpUrl: ''
    });
  },
  onchange: function () {
    let color = this.getFieldValue('COLOR');
    this.setColour(color);
  }
};

javascriptGenerator.forBlock['jg_events_all_label'] = (block) => {
  const label = block.getFieldValue('LABEL');
  let event = block.getFieldValue('EVENT');
  let ending = '});';
  if (String(event) === '^empty') {
    event = '';
    ending = '';
  }
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `/*
  ${label.replaceAll('*/', '* /')}
*/
   ${event}
   ${statements}
   ${ending}`;
};

Blockly.Blocks['jg_members_list_of_known_member_ids'] = {
  init: function () {
    this.jsonInit({
      message0: 'list of known member IDs',
      inputsInline: true,
      args0: [],
      colour: '#187795',
      output: Types.Array,
      tooltip: 'Get a list of member IDs that the bot has known about.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_list_of_known_member_ids'] = function () {
  return [`JSON.parse(JSON.stringify(s4d.client)).users`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_new_list_of_known_ids'] = {
  init: function () {
    this.jsonInit({
      message0: 'list of known %1 IDs',
      inputsInline: true,
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['member', 'users'],
            ['channel', 'channels'],
            ['server', 'guilds']
          ]
        }
      ],
      colour: '#187795',
      output: Types.Array,
      tooltip: 'Get a list of IDs that the bot has known about.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_new_list_of_known_ids'] = (block) => {
  const type = block.getFieldValue('TYPE');
  return [`JSON.parse(JSON.stringify(s4d.client)).${type}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_get_member_by_id'] = {
  init: function () {
    this.jsonInit({
      message0: 'get user by ID %1',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'ID',
          check: Types.String
        }
      ],
      colour: '#187795',
      output: Types.Member,
      tooltip: 'Get a user by their ID. This probably wont let you do server actions with the user however, like giving them a role.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_get_member_by_id'] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  return [`s4d.client.users.cache.get(String(${id}))`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_member_is_in_voice_channel'] = {
  init: function () {
    this.jsonInit({
      message0: 'member %1 is in voice channel?',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        }
      ],
      colour: '#a55b80',
      output: Types.Boolean,
      tooltip: 'Checks if a member is in a voice channel.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_member_is_in_voice_channel'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return [`${String(member).endsWith('.user') || String(member).endsWith('.user)') ? member.replace('.user', '') : member}.voice.channel != null`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_get_members_current_voice_channel'] = {
  init: function () {
    this.jsonInit({
      message0: 'get member%1s current voice channel',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        }
      ],
      colour: '#a55b80',
      output: Types.Channel,
      tooltip: 'Get a server members current voice channel, if they are in one.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_get_members_current_voice_channel'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return [`${String(member).endsWith('.user') || String(member).endsWith('.user)') ? member.replace('.user', '') : member}.voice.channel`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_messages_delete_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'delete message %1',
      colour: '#4C97FF',
      tooltip: 'Delete a message, if you have permission.',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        }
      ]
    });
  }
};
javascriptGenerator.forBlock['jg_messages_delete_message'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.delete();`;
};

Blockly.Blocks['jg_monaco_messages_delete_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'delete message %1',
      colour: '#4C97FF',
      tooltip: 'Delete a message, if you have permission.',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_messages_delete_message'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.delete();`;
};

Blockly.Blocks['jg_messages_react_to_message_with_reaction'] = {
  init: function () {
    this.jsonInit({
      message0: 'react to message %1 with reaction %2',
      inputsInline: true,
      tooltip: 'React to a message with a certain reaction.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        },
        {
          type: 'input_value',
          name: 'REACTION',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_messages_react_to_message_with_reaction'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const reaction = javascriptGenerator.valueToCode(block, 'REACTION', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.react(${reaction});`;
};

Blockly.Blocks['jg_messages_crosspost_message'] = {
  init: function () {
    this.jsonInit({
      message0: 'crosspost message %1',
      inputsInline: true,
      tooltip: 'Crosspost a message if it is in an announcement channel, if the bot has permission to do that.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_messages_crosspost_message'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.crosspost();`;
};

Blockly.Blocks['jg_messages_edit_message_to_text'] = {
  init: function () {
    this.jsonInit({
      message0: 'edit message %1 to text %2',
      inputsInline: true,
      tooltip: 'Edit a message to say something else, if it was from the bot.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MESSAGE',
          check: Types.Message
        },
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_messages_edit_message_to_text'] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.edit(String(${text}));`;
};

Blockly.Blocks['jg_monaco_members_remove_timeout_from_member'] = {
  init: function () {
    this.jsonInit({
      message0: 'remove timeout from member %1',
      inputsInline: true,
      tooltip: 'Remove timeout from a certain member, if the bot has permission to.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_members_remove_timeout_from_member'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return `${member}.timeout(null);`;
};

Blockly.Blocks['jg_monaco_servers_on_server_get_audit_logs_then'] = {
  init: function () {
    this.jsonInit({
      message0: 'on server %1 get audit logs %2 then %3',
      inputsInline: true,
      tooltip: 'Get audit logs on a server, then get information from the audit logs.',
      colour: '#E3317A',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_on_server_get_audit_logs_then'] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `${server}.fetchAuditLogs().then(async (audit_raw) => {
  let audit = audit_raw.entries;
  ${statements}
});`;
};

Blockly.Blocks['jg_monaco_servers_audit_log_number'] = {
  init: function () {
    this.jsonInit({
      message0: 'audit log #%1',
      inputsInline: true,
      tooltip: 'Get a certain log from the audit logs.',
      colour: '#E3317A',
      output: 'AuditLog',
      args0: [
        {
          type: 'input_value',
          name: 'NUMBER',
          check: Types.Number
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_audit_log_number'] = (block) => {
  const number = javascriptGenerator.valueToCode(block, 'NUMBER', javascriptGenerator.ORDER_ATOMIC);
  return [`audit.at(Number(${number}) - 1)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_amount_of_audit_logs'] = {
  init: function () {
    this.jsonInit({
      message0: 'amount of audit logs',
      inputsInline: true,
      tooltip: 'Get the amount of logs in the audit logs.',
      colour: '#E3317A',
      output: Types.Number,
      args0: []
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_amount_of_audit_logs'] = function () {
  return ['audit.size', javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_get_property_from_log'] = {
  init: function () {
    this.jsonInit({
      message0: 'get %1 from log %2',
      inputsInline: true,
      tooltip: 'Get information about a certain log.',
      colour: '#E3317A',
      output: Types.Any,
      args0: [
        {
          type: 'field_dropdown',
          name: 'PROP',
          options: [
            ['target type', 'targetType'],
            ['action type', 'actionType'],
            ['action', 'action'],
            ['reason', 'reason'],
            ['user who did the action', 'executor'],
            ['changes', 'changes'],
            ['item the action was done to', 'target']
          ]
        },
        {
          type: 'input_value',
          name: 'LOG',
          check: 'AuditLog'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_get_property_from_log'] = (block) => {
  const log = javascriptGenerator.valueToCode(block, 'LOG', javascriptGenerator.ORDER_ATOMIC);
  const prop = block.getFieldValue('PROP');
  return [`${log}.${prop}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_log_has_reason'] = {
  init: function () {
    this.jsonInit({
      message0: 'log %1 has reason?',
      inputsInline: true,
      tooltip: 'Checks if a log has a reason on it.',
      colour: '#E3317A',
      output: Types.Boolean,
      args0: [
        {
          type: 'input_value',
          name: 'LOG',
          check: 'AuditLog'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_log_has_reason'] = (block) => {
  const log = javascriptGenerator.valueToCode(block, 'LOG', javascriptGenerator.ORDER_ATOMIC);
  return [`${log}.reason != null`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_amount_of_changes_in_log_changes'] = {
  init: function () {
    this.jsonInit({
      message0: 'amount of changes in log changes %1',
      inputsInline: true,
      tooltip: "Gets the amount of a log's changes.",
      colour: '#E3317A',
      output: Types.Number,
      args0: [
        {
          type: 'input_value',
          name: 'CHANGES',
          check: 'AuditChanges'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_amount_of_changes_in_log_changes'] = (block) => {
  const changes = javascriptGenerator.valueToCode(block, 'CHANGES', javascriptGenerator.ORDER_ATOMIC);
  return [`${changes}.length`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_change_number_in_changes'] = {
  init: function () {
    this.jsonInit({
      message0: 'change #%1 in changes %2',
      inputsInline: true,
      tooltip: "Gets a change from a log's changes.",
      colour: '#E3317A',
      output: 'AuditLogChanges',
      args0: [
        {
          type: 'input_value',
          name: 'INDEX',
          check: Types.Number
        },
        {
          type: 'input_value',
          name: 'CHANGES',
          check: 'AuditChanges'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_change_number_in_changes'] = (block) => {
  const changes = javascriptGenerator.valueToCode(block, 'CHANGES', javascriptGenerator.ORDER_ATOMIC);
  const number = javascriptGenerator.valueToCode(block, 'INDEX', javascriptGenerator.ORDER_ATOMIC);
  return [`${changes}[${number}]`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_get_from_change'] = {
  init: function () {
    this.jsonInit({
      message0: 'get %1 from change %2',
      inputsInline: true,
      tooltip: 'Gets information from a change.',
      colour: '#E3317A',
      output: Types.Any,
      args0: [
        {
          type: 'field_dropdown',
          name: 'PROP',
          options: [
            ['name of changed item', 'key'],
            ['old state of changed item', 'old'],
            ['new state of changed item', 'new']
          ]
        },
        {
          type: 'input_value',
          name: 'CHANGE',
          check: 'AuditLogChanges'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_get_from_change'] = (block) => {
  const change = javascriptGenerator.valueToCode(block, 'CHANGE', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('PROP');
  return [`${change}.${type}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_unused_scratcjwtff'] = {
  init: function () {
    this.jsonInit({
      message0: 'move %1 steps',
      inputsInline: true,
      tooltip: '',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'STEPS',
          check: Types.Number
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_unused_scratcjwtff'] = function () {
  return '';
};

Blockly.Blocks['jg_monaco_roles_hoist_role'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 role %2 with reason %3',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['hoist', 'true'],
            ['unhoist', 'false']
          ]
        },
        {
          type: 'input_value',
          name: 'ROLE',
          check: Types.Role
        },
        {
          type: 'input_value',
          name: 'REASON',
          check: Types.String
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#4C97FF',
      tooltip: 'Hoist or unhoist a role. Hoisting a role allows it to be displayed seperately from other roles.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_roles_hoist_role'] = (block) => {
  const type = block.getFieldValue('TYPE');
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  let reason = javascriptGenerator.valueToCode(block, 'REASON', javascriptGenerator.ORDER_ATOMIC);
  if (reason) reason = ', ' + reason;
  return `${role}.setHoist(${type}${reason});`;
};

Blockly.Blocks['jg_monaco_channels_get_channel_number_from_server'] = {
  init: function () {
    this.jsonInit({
      message0: 'get channel #%1 from server %2',
      inputsInline: false,
      tooltip: 'Gets a certain channel in the server.',
      colour: '#a55b80',
      output: Types.Channel,
      args0: [
        {
          type: 'input_value',
          name: 'INDEX',
          check: Types.Number
        },
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        }
      ]
    });
  }
};
javascriptGenerator.forBlock['jg_monaco_channels_get_channel_number_from_server'] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const index = javascriptGenerator.valueToCode(block, 'INDEX', javascriptGenerator.ORDER_ATOMIC);
  return [`${server}.channels.cache.at(Number(${index}) - 1)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_servers_amount_of_channels_in_server'] = {
  init: function () {
    this.jsonInit({
      message0: 'amount of channels in server %1',
      inputsInline: false,
      tooltip: 'Gets the amount of channels in a server.',
      colour: '#D85E47',
      output: Types.Channel,
      args0: [
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_servers_amount_of_channels_in_server'] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  return [`${server}.channels.cache.size`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_alex_channels_first_channel_in_server'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 channel in server %2',
      inputsInline: true,
      tooltip: 'Gets a certain channel in a server depending on the option picked.',
      colour: '#a55b80',
      output: Types.Channel,
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['first', 'first'],
            ['last', 'last'],
            ['random', 'random']
          ]
        },
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_alex_channels_first_channel_in_server'] = (block) => {
  const type = block.getFieldValue('TYPE');
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  return [`${server}.channels.cache.${type}()`, javascriptGenerator.ORDER_NONE];
};

// webhooks
Blockly.Blocks['jose_jg_webhooks_get_all_webhooks_in_channel_then'] = {
  init: function () {
    this.jsonInit({
      message0: 'get all webhooks in channel %1 then %2 %3',
      inputsInline: true,
      tooltip: 'Get all webhooks on a channel, then run the blocks inside.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'CHANNEL',
          check: Types.Channel
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_webhooks_get_all_webhooks_in_channel_then'] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `${channel}.fetchWebhooks().then(async (webhooks) => {
  ${statements}
});`;
};

Blockly.Blocks['jose_jg_webhooks_amount_of_webhooks'] = {
  init: function () {
    this.jsonInit({
      message0: 'amount of webhooks',
      inputsInline: false,
      tooltip: 'The amount of webhooks the channel has.',
      colour: '#4C97FF',
      output: Types.Number,
      args0: []
    });
  }
};

javascriptGenerator.forBlock['jose_jg_webhooks_amount_of_webhooks'] = function () {
  return ['webhooks.size', javascriptGenerator.ORDER_NONE];
};

registerRestrictions('jose_jg_webhooks_amount_of_webhooks', [
  {
    type: 'hasparent',
    message: 'RES_WEBHOOK_GET_ALL_CHANNEL',
    types: ['jose_jg_webhooks_get_all_webhooks_in_channel_then']
  }
]);

Blockly.Blocks['jose_jg_webhooks_webhook_with_id_exists_in_channel'] = {
  init: function () {
    this.jsonInit({
      message0: 'webhook with ID %1 exists in channel?',
      inputsInline: true,
      tooltip: 'Check if the channel we are checking webhooks on has a certain webhook.',
      colour: '#4C97FF',
      output: Types.Boolean,
      args0: [
        {
          type: 'input_value',
          name: 'ID',
          check: T(Types.String, Types.Number)
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_webhooks_webhook_with_id_exists_in_channel'] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  return [`webhooks.has(String(${id}))`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions('jose_jg_webhooks_webhook_with_id_exists_in_channel', [
  {
    type: 'hasparent',
    message: 'RES_WEBHOOK_GET_ALL_CHANNEL',
    types: ['jose_jg_webhooks_get_all_webhooks_in_channel_then']
  }
]);

Blockly.Blocks['jose_jg_webhooks_get_webhook_with_id'] = {
  init: function () {
    this.jsonInit({
      message0: 'get webhook with ID %1',
      inputsInline: true,
      tooltip: 'Get a webhook in the channel with a certain ID.',
      colour: '#4C97FF',
      output: Types.Webhook,
      args0: [
        {
          type: 'input_value',
          name: 'ID',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_webhooks_get_webhook_with_id'] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  return [`webhooks.get(String(${id}))`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions('jose_jg_webhooks_get_webhook_with_id', [
  {
    type: 'hasparent',
    message: 'RES_WEBHOOK_GET_ALL_CHANNEL',
    types: ['jose_jg_webhooks_get_all_webhooks_in_channel_then']
  }
]);

Blockly.Blocks['jose_jg_webhooks_get_webhook_information'] = {
  init: function () {
    this.jsonInit({
      message0: 'get webhook %2 %1',
      inputsInline: true,
      tooltip: 'Get information about a certain webhook.',
      colour: '#4C97FF',
      output: Types.Any,
      args0: [
        {
          type: 'field_dropdown',
          name: 'PROP',
          options: [
            ['profile picture URL', 'avatarURL()'],
            ['channel ID', 'channelId'],
            ['created timestamp', 'createdTimestamp'],
            ['server ID', 'guildId'],
            ['ID', 'id'],
            ['name', 'name'],
            ['creator', 'owner'],
            ['token (creator only)', 'token'],
            ['URL', 'url']
          ]
        },
        {
          type: 'input_value',
          name: 'WEBHOOK',
          check: Types.Webhook
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_webhooks_get_webhook_information'] = (block) => {
  const webhook = javascriptGenerator.valueToCode(block, 'WEBHOOK', javascriptGenerator.ORDER_ATOMIC);
  const prop = block.getFieldValue('PROP');
  return [`${webhook}.${prop}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jose_jg_delete_created_webhook_with_reason'] = {
  init: function () {
    this.jsonInit({
      message0: 'delete created webhook with reason %1',
      inputsInline: true,
      tooltip: 'Delete the created webhook.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'REASON',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_delete_created_webhook_with_reason'] = (block) => {
  const reason = javascriptGenerator.valueToCode(block, 'REASON', javascriptGenerator.ORDER_ATOMIC);
  return `webhook.delete(String(${reason}));`;
};

registerRestrictions('jose_jg_delete_created_webhook_with_reason', [
  {
    type: 'hasparent',
    message: 'RES_CREATE_WEBHOOK_PARENT',
    types: ['s4d_create_webhook_then', 'jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do']
  }
]);

Blockly.Blocks['jose_jg_gained_delete_webhook_with_reason'] = {
  init: function () {
    this.jsonInit({
      message0: 'delete webhook with reason %1',
      inputsInline: true,
      tooltip: 'Delete the webhook.',
      colour: '#135cc2',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'REASON',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_gained_delete_webhook_with_reason'] = (block) => {
  const reason = javascriptGenerator.valueToCode(block, 'REASON', javascriptGenerator.ORDER_ATOMIC);
  return `gwebhook.delete(String(${reason}));`;
};

registerRestrictions('jose_jg_gained_delete_webhook_with_reason', [
  {
    type: 'hasparent',
    message: 'RES_GET_WEBHOOK_PARENT',
    types: ['s4d_get_webhook_then']
  }
]);

Blockly.Blocks['jose_jg_webhooks_delete_webhook_with_reason'] = {
  init: function () {
    this.jsonInit({
      message0: 'delete webhook %1 with reason %2',
      inputsInline: true,
      tooltip: 'Delete a webhook.',
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'WEBHOOK',
          check: Types.Webhook
        },
        {
          type: 'input_value',
          name: 'REASON',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jose_jg_webhooks_delete_webhook_with_reason'] = (block) => {
  const webhook = javascriptGenerator.valueToCode(block, 'WEBHOOK', javascriptGenerator.ORDER_ATOMIC);
  const reason = javascriptGenerator.valueToCode(block, 'REASON', javascriptGenerator.ORDER_ATOMIC);
  return `${webhook}.delete(String(${reason}));`;
};

Blockly.Blocks['jg_text_remake_paragraph_quotes'] = {
  init: function () {
    this.jsonInit({
      message0: '%1%2%3',
      inputsInline: true,
      tooltip: 'A text input that allows multi-lines.',
      colour: '%{BKY_TEXTS_HUE}',
      output: ['String', 'Multi-Line_Text'],
      args0: [
        {
          type: 'field_image',
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC',
          width: 12,
          height: 12,
          alt: '"',
          flipRtl: false
        },
        {
          type: 'field_multilinetext',
          name: 'TEXT'
        },
        {
          type: 'field_image',
          src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==',
          width: 12,
          height: 12,
          alt: '"',
          flipRtl: false
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_text_remake_paragraph_quotes'] = (block) => {
  let text = block.getFieldValue('TEXT');
  text = String(text).replaceAll('\\', '\\\\');
  let multiline = "'";
  if (String(text).includes('\n') || String(text).includes('\r')) multiline = '`';
  if (multiline == "'") {
    text = String(text).replaceAll("'", "\\'");
  } else {
    text = String(text).replaceAll('`', '\\`');
  }
  if (multiline == '`') text = String(text).replaceAll('${', '\\${');
  return [`${multiline}${text}${multiline}`, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['jg_text_remake_in_text_replace_with'] = {
  init: function () {
    this.jsonInit({
      message0: 'in text %1 replace %2 with %3',
      inputsInline: true,
      tooltip: 'Replace all occurences of some text with other text.',
      colour: '%{BKY_TEXTS_HUE}',
      output: Types.String,
      args0: [
        {
          type: 'input_value',
          name: 'ORIGIN',
          check: Types.String
        },
        {
          type: 'input_value',
          name: 'REPLACE',
          check: ['String', 'RegEx']
        },
        {
          type: 'input_value',
          name: 'WITH',
          check: Types.String
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_text_remake_in_text_replace_with'] = (block) => {
  const origin = javascriptGenerator.valueToCode(block, 'ORIGIN', javascriptGenerator.ORDER_ATOMIC);
  const replace = javascriptGenerator.valueToCode(block, 'REPLACE', javascriptGenerator.ORDER_ATOMIC);
  const replaced = javascriptGenerator.valueToCode(block, 'WITH', javascriptGenerator.ORDER_ATOMIC);
  return [`String(${origin}).replaceAll(${replace}, String(${replaced}))`, javascriptGenerator.ORDER_NONE];
};

// is equal to and is the same type as
Blockly.Blocks['jg_logic_is_equal_to_and_is_the_same_type_as'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 is %2 the same type as %3',
      inputsInline: true,
      tooltip: 'Checks if something is equal to another value, and is also the same type of thing as that value.',
      colour: '%{BKY_LOGIC_HUE}',
      output: Types.Boolean,
      args0: [
        {
          type: 'input_value',
          name: 'A',
          check: Types.Any
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['equal to and is', '==='],
            ["not equal to or isn't", '!==']
          ]
        },
        {
          type: 'input_value',
          name: 'B',
          check: Types.Any
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_logic_is_equal_to_and_is_the_same_type_as'] = (block) => {
  const a = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_ATOMIC);
  const b = javascriptGenerator.valueToCode(block, 'B', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  return [`${a} ${type} ${b}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_roles_change_role_to_be_mentionable_with_reason'] = {
  init: function () {
    this.jsonInit({
      message0: 'change role %2 to %1 mentionable with reason %3',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['be', 'true'],
            ['not be', 'false']
          ]
        },
        {
          type: 'input_value',
          name: 'ROLE',
          check: Types.Role
        },
        {
          type: 'input_value',
          name: 'REASON',
          check: Types.String
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#4C97FF',
      tooltip: 'Set a role to be mentionable or not.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_roles_change_role_to_be_mentionable_with_reason'] = (block) => {
  const type = block.getFieldValue('TYPE');
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  let reason = javascriptGenerator.valueToCode(block, 'REASON', javascriptGenerator.ORDER_ATOMIC);
  if (reason) reason = ', ' + reason;
  return `${role}.setMentionable(${type}${reason});`;
};

Blockly.Blocks['jg_unused_any_color'] = {
  init: function () {
    this.jsonInit({
      message0: 'ㅤ%1ㅤ%2ㅤㅤㅤㅤ',
      colour: '#ff0000',
      inputsInline: false,
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'field_colour',
          name: 'COLOR',
          colour: '#ff0000'
        },
        {
          type: 'input_dummy'
        }
      ]
    });
  },
  onchange: function () {
    let color = this.getFieldValue('COLOR');
    this.setColour(color);
  },
  isHiden: true
};

javascriptGenerator.forBlock['jg_unused_any_color'] = function () {
  return '';
};

Blockly.Blocks['jg_unused_any_color2'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      colour: '#ff0000',
      inputsInline: false,
      nextStatement: null,
      args0: [
        {
          type: 'field_colour',
          name: 'COLOR',
          colour: '#ff0000'
        }
      ]
    });
  },
  onchange: function () {
    let color = this.getFieldValue('COLOR');
    this.setColour(color);
  },
  isHiden: true
};

javascriptGenerator.forBlock['jg_unused_any_color2'] = function () {
  return '';
};

Blockly.Blocks['jg_members_user_has_value'] = {
  init: function () {
    this.jsonInit({
      message0: 'user %1 %2',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.UserResolve
        },
        {
          type: 'field_grid_dropdown',
          name: 'TYPE',
          options: [
            ['has a banner?', '.banner != null'],
            ['is a bot?', '.bot'],
            ['is the bot?', ' == s4d.client.user'],
            ['is a discord system?', '.system'],
            ['has made a DM with the bot?', '.dmChannel != null'],
            ['is missing information?', '.partial'],
            // flags
            ['is a verified bot?', '.flags.has("VERIFIED_BOT")'],
            ['is a discord employee?', '.flags.has("DISCORD_EMPLOYEE")'],
            ['is a partnered server owner?', '.flags.has("PARTNERED_SERVER_OWNER")'],
            ['is a HypeSquad events member?', '.flags.has("HYPESQUAD_EVENTS")'],
            ['is a HypeSquad Bravery member?', '.flags.has("HOUSE_BRAVERY")'],
            ['is a HypeSquad Brilliance member?', '.flags.has("HOUSE_BRILLIANCE")'],
            ['is a HypeSquad Balance member?', '.flags.has("HOUSE_BALANCE")'],
            ['is a bug hunter of level 1?', '.flags.has("BUGHUNTER_LEVEL_1")'],
            ['is a bug hunter of level 2?', '.flags.has("BUGHUNTER_LEVEL_2")'],
            ['is an early supporter?', '.flags.has("EARLY_SUPPORTER")'],
            ['is a team user?', '.flags.has("TEAM_USER")'],
            ['is an early verified bot developer?', '.flags.has("EARLY_VERIFIED_BOT_DEVELOPER")'],
            ['is a discord certified moderator?', '.flags.has("DISCORD_CERTIFIED_MODERATOR")'],
            ['is a bot HTTP interaction?', '.flags.has("BOT_HTTP_INTERACTIONS")']
          ]
        }
      ],
      colour: '#50a6c9',
      output: Types.Boolean,
      tooltip: 'Check if the specified user has or is this property.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_user_has_value'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  const property = block.getFieldValue('TYPE');
  return [`${member}${property}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_member_is_value'] = {
  init: function () {
    this.jsonInit({
      message0: 'member %1 %2',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['is bannable by the bot?', '.bannable'],
            ['is kickable by the bot?', '.kickable'],
            ['is below the bot in roles and managable by the bot?', '.manageable'],
            ['is moderatable by the bot?', '.moderatable'],
            ['is missing information?', '.partial'],
            ["hasn't passed the server's rules screen?", '.pending']
          ]
        }
      ],
      colour: '#50a6c9',
      output: Types.Boolean,
      tooltip: 'Check if the specified member has or is this property.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_member_is_value'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, 'member');
  const property = block.getFieldValue('TYPE');
  return [`${member}${property}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_user_accent_color'] = {
  init: function () {
    this.jsonInit({
      message0: 'user %1 accent color',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.UserResolve
        }
      ],
      colour: '#50a6c9',
      output: Types.String,
      tooltip: 'The Hex color of a users accent color.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_user_accent_color'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return [`${member}.hexAccentColor`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_user_exactly_equals_user'] = {
  init: function () {
    this.jsonInit({
      message0: 'user %1 exactly equals user %2?',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.UserResolve
        },
        {
          type: 'input_value',
          name: 'MEMBER2',
          check: Types.UserResolve
        }
      ],
      colour: '#50a6c9',
      output: Types.Boolean,
      tooltip: 'Check if a user is the exact same as another user.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_user_exactly_equals_user'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  const member2 = javascriptGenerator.valueToCode(block, 'MEMBER2', javascriptGenerator.ORDER_ATOMIC);
  return [`${member}.equals(${member2})`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_member_has_nickname'] = {
  init: function () {
    this.jsonInit({
      message0: 'member %1 has nickname?',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        }
      ],
      colour: '#50a6c9',
      output: Types.Boolean,
      tooltip: 'Check if a member has a nickname.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_member_has_nickname'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, 'member');
  return [`${member}.nickname != null`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_members_member_s_nickname'] = {
  init: function () {
    this.jsonInit({
      message0: 'member %1 nickname',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        }
      ],
      colour: '#50a6c9',
      output: Types.String,
      tooltip: "The members nickname. Is also the member's username if the nickname is not found.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_member_s_nickname'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, 'member');
  return [`${member}.nickname??${member}.user.username`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_roles_get_all_member_roles_then_for_each_do'] = {
  init: function () {
    this.jsonInit({
      message0: 'get all member %1 roles then for each %2 do %3',
      inputsInline: true,
      tooltip: 'Run the blocks inside for each role the member has.',
      colour: '#2EB66B',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_roles_get_all_member_roles_then_for_each_do'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC).replaceAll(/member(?=\.user)\.user/gi, 'member');
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `${member}.roles.cache.forEach(async (member_role) => {
  ${statements}
});`;
};

Blockly.Blocks['jg_roles_get_all_member_roles_then_for_each_do_role'] = {
  init: function () {
    this.jsonInit({
      message0: 'role',
      args0: [],
      colour: '#2EB66B',
      output: Types.Role,
      tooltip: 'The current role in the member role loop.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_roles_get_all_member_roles_then_for_each_do_role'] = function () {
  return ['member_role', javascriptGenerator.ORDER_NONE];
};

restrictToParent(['jg_roles_get_all_member_roles_then_for_each_do'], 'jg_roles_get_all_member_roles_then_for_each_do_role', 'This block must be in a "get all member roles then for each do" block!');

Blockly.Blocks['jg_emoji_text_regex_list_of_custom_emojis_in_text'] = {
  init: function () {
    this.jsonInit({
      message0: 'list of custom emojis in text %1',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ],
      colour: '#4C97FF',
      output: ['List', 'Array'],
      tooltip: 'A list of custom non-animated emojis in text.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_emoji_text_regex_list_of_custom_emojis_in_text'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`${text}.match(/(?<!\\\\)<:(?<=<:)[a-zA-Z0-9_-]*(?=:):[0-9]*>/gim)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_emoji_text_regex_list_of_animated_emojis_in_text'] = {
  init: function () {
    this.jsonInit({
      message0: 'list of animated emojis in text %1',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ],
      colour: '#4C97FF',
      output: ['List', 'Array'],
      tooltip: 'A list of custom animated emojis in text.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_emoji_text_regex_list_of_animated_emojis_in_text'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`${text}.match(/(?<!\\\\)<a:(?<=<a:)[a-zA-Z0-9_-]*(?=:):[0-9]*>/gim)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_emoji_text_regex_list_of_normal_emojis_in_text'] = {
  init: function () {
    this.jsonInit({
      message0: 'list of normal emojis in text %1',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ],
      colour: '#4C97FF',
      output: ['List', 'Array'],
      tooltip: 'A list of normal emojis in text, like the default thumbs up emoji.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_emoji_text_regex_list_of_normal_emojis_in_text'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`String(${text}).replaceAll(" ", "").match(/((\\u00a9|\\u00ae|[\\u2000-\\u3300]|\\ud83c[\\ud000-\\udfff]|\\ud83d[\\ud000-\\udfff]|\\ud83e[\\ud000-\\udfff]\\s?)+)/gm)`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_text_regex_create_new_regex_of'] = {
  init: function () {
    this.jsonInit({
      message0: 'create new RegEx of %1',
      args0: [
        {
          type: 'field_input',
          name: 'TEXT'
        }
      ],
      colour: '%{BKY_TEXTS_HUE}',
      output: Types.RegEx,
      tooltip: 'RegEx is a regular expression that can be used to find text inside of text with a couple checks to make sure that text is exactly the way you want it. You can create RegEx on the "Help" button on the block. You\'ll need to paste in the slashes and the flags from the RegEx into the block.',
      helpUrl: 'https://regex101.com/'
    });
  }
};

javascriptGenerator.forBlock['jg_text_regex_create_new_regex_of'] = (block) => {
  let regex = block.getFieldValue('TEXT');
  try {
    let matches = String(regex).match(/(\/)[\S ]*(\/[a-z]{0,7})/gim);
    if (!(regex && String(regex) && String(regex).startsWith('/') && matches && matches.length == 1)) regex = '';
  } catch (err) {
    console.error('This RegEx check is not supported on this platform.', err);
  }
  return [regex, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['jg_lists_regex_list_of_matches_from_regex_on_text'] = {
  init: function () {
    this.jsonInit({
      message0: 'list of matches from RegEx %1 on text %2',
      args0: [
        {
          type: 'input_value',
          name: 'REGEX',
          check: Types.RegEx
        },
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ],
      inputsInline: true,
      colour: '%{BKY_LISTS_HUE}',
      output: ['List', 'Array'],
      tooltip: 'RegEx is a regular expression that can be used to find text inside of text with a couple checks to make sure that text is exactly the way you want it. This block outputs a list of matches from the RegEx being used on the text.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_lists_regex_list_of_matches_from_regex_on_text'] = (block) => {
  const regex = javascriptGenerator.valueToCode(block, 'REGEX', javascriptGenerator.ORDER_ATOMIC);
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`String(${text}).match(${regex})`, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks['jg_member_is_user_in_server'] = {
  init: function () {
    this.jsonInit({
      message0: 'is user %1 in server %2?',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.UserResolve
        },
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        }
      ],
      colour: '#50a6c9',
      output: Types.Boolean,
      tooltip: 'Check if the member is in the server.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_member_is_user_in_server'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  // i know this is probably not the best way of doing it but i couldnt think of anything else that wouldnt break the original way this block was used
  return [
    `await (() => {
  return new Promise((resolve, reject) => {
    ${server}.members.fetch(${member}.id).then(() => resolve(true)).catch(() => resolve(false))
  })
})()`,
    javascriptGenerator.ORDER_NONE
  ];
};

Blockly.Blocks['jg_members_roles_fetch_with_id_from_server_then_do'] = {
  init: function () {
    this.jsonInit({
      message0: 'fetch %1 with id %2 from server %3 then %4 do %5',
      inputsInline: true,
      tooltip: "Put a member or role from a server into the bot's memory, then run the blocks inside.",
      colour: '#2EB66B',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['member', 'members'],
            ['role', 'roles']
          ]
        },
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        },
        {
          type: 'input_value',
          name: 'ID',
          check: Types.String
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_members_roles_fetch_with_id_from_server_then_do'] = (block) => {
  const type = block.getFieldValue('TYPE');
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `${server}.${type}.fetch(String(${id})).then((fetched_${type}_from_server) => {
  ${statements}
});`;
};

Blockly.Blocks['jg_members_roles_fetch_with_id_from_server_then_do_fetched_item'] = {
  init: function () {
    this.jsonInit({
      message0: 'fetched %1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['member', 'members'],
            ['role', 'roles']
          ]
        }
      ],
      colour: '#2EB66B',
      output: Types.Member,
      tooltip: 'The current role in the member role loop.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_members_roles_fetch_with_id_from_server_then_do_fetched_item'] = (block) => {
  const type = block.getFieldValue('TYPE');
  return [`fetched_${type}_from_server`, javascriptGenerator.ORDER_NONE];
};

restrictToParent(['jg_members_roles_fetch_with_id_from_server_then_do'], 'jg_members_roles_fetch_with_id_from_server_then_do_fetched_item', 'Missing Restriction Text');

Blockly.Blocks['jg_s4d_other_run_code_inside_file'] = {
  init: function () {
    this.jsonInit({
      message0: 'run code inside file %1',
      args0: [
        {
          type: 'input_value',
          name: 'FILE',
          check: Types.String
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#D14081',
      tooltip: "Run javascriptGenerator code inside a file in the bot's files.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_s4d_other_run_code_inside_file'] = (block) => {
  const file = javascriptGenerator.valueToCode(block, 'FILE', javascriptGenerator.ORDER_ATOMIC);
  return `require((String(${file}).startsWith("./") ? String(${file}) : "./" + String(${file})));`;
};

Blockly.Blocks['jg_roles_fetch_all_roles_in_server_then_do'] = {
  init: function () {
    this.jsonInit({
      message0: 'fetch all roles in server %1 then %2 do %3',
      inputsInline: true,
      tooltip: "Get every role in a server and put it into the bot's memory, then run the blocks inside.",
      colour: '#2EB66B',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'SERVER',
          check: Types.Server
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_roles_fetch_all_roles_in_server_then_do'] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `${server}.roles.fetch().then(async (s4d_roles_from_server_auydewgfiyewfh) => {
  ${statements}
});`;
};

Blockly.Blocks['jg_channels_wait_for_message_in_channel_to_meet_check_for_minutes_then_if_no_messages_pass'] = {
  init: function () {
    this.jsonInit({
      message0: 'wait for message in channel %1 to meet check %2 for %3 minutes then %4 %5 if no messages pass %6 %7',
      inputsInline: false,
      tooltip: "Wait for a message in the specified channel to meet the requirement (ex: message author ID being equal to someone elses ID) for a certain amount of time, then run the blocks inside depending on if a message passed or if a message didn't pass.",
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: 'input_value',
          name: 'CHANNEL',
          check: Types.Channel
        },
        {
          type: 'input_value',
          name: 'CHECK',
          check: Types.Boolean
        },
        {
          type: 'input_value',
          name: 'TIME',
          check: Types.Number
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENT2'
        }
      ]
    });
  }
};

javascriptGenerator.forBlock['jg_channels_wait_for_message_in_channel_to_meet_check_for_minutes_then_if_no_messages_pass'] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const filter = javascriptGenerator.valueToCode(block, 'CHECK', javascriptGenerator.ORDER_ATOMIC);
  const time = javascriptGenerator.valueToCode(block, 'TIME', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  const statement2 = javascriptGenerator.statementToCode(block, 'STATEMENT2');
  return `${channel}.awaitMessages({
  filter: (s4dmessage) => ${filter},
  time: (${time} * 60 * 1000),
  max: 1
}).then(async (S4DAPP_MESSAGES_RETURNED_FCOLLECTED) => {
  s4dmessage = S4DAPP_MESSAGES_RETURNED_FCOLLECTED.first()
  ${statements}
}).catch(async err => {
  ${statement2}
});`;
};

Blockly.Blocks['jg_joins_subleaves_leaving_member'] = {
  init: function () {
    this.jsonInit({
      message0: 'leaving member',
      args0: [],
      colour: '#187795',
      output: Types.Member,
      tooltip: 'The member that left the server.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_joins_subleaves_leaving_member'] = function () {
  return [`s4d.leavingMember.user`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_messages_value_dropdown_content_of_message'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 of message %2',
      args0: [
        {
          type: 'field_grid_dropdown',
          name: 'TYPE',
          options: [
            ['content', 'content'],
            ['ID', 'id'],
            ['timestamp', 'createdTimestamp'],
            ['author', 'author'],
            ['member', 'member.user'],
            ['mentioned member', 'mentions.members.first().user'],
            ['mentioned channel', 'mentions.channels.first()'],
            ['mentioned role', 'mentions.roles.first()'],
            ['channel', 'channel'],
            ['channel category', 'channel.parent'],
            ['server', 'guild']
          ]
        },
        {
          type: 'input_value',
          name: 'MSG',
          check: Types.Message
        }
      ],
      colour: '#4C97FF',
      output: Types.Any,
      tooltip: 'Get a property from a message.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_messages_value_dropdown_content_of_message'] = (block) => {
  const property = block.getFieldValue('TYPE');
  const message = javascriptGenerator.valueToCode(block, 'MSG', javascriptGenerator.ORDER_ATOMIC);
  return [`${message}.${property}`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_edited_old_new_message'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 message',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['new', 'new'],
            ['original', 'old']
          ]
        }
      ],
      colour: '#a55b80',
      output: Types.Message,
      tooltip: "The edited message in either it's original state or new state.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_edited_old_new_message'] = (block) => {
  const state = block.getFieldValue('TYPE');
  return [`${state}Message`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_monaco_members_member_is_timed_out'] = {
  init: function () {
    this.jsonInit({
      message0: 'member %1 is timed out?',
      args0: [
        {
          type: 'input_value',
          name: 'MEMBER',
          check: Types.Member
        }
      ],
      colour: '#50a6c9',
      output: Types.Boolean,
      tooltip: 'Checks if a Member is timed out.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_monaco_members_member_is_timed_out'] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return [`${member}.isCommunicationDisabled()`, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks['jg_s4d_other_throw_custom_error'] = {
  init: function () {
    this.jsonInit({
      message0: 'throw custom error %1',
      args0: [
        {
          type: 'input_value',
          name: 'ERROR',
          check: Types.Any
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#D14081',
      tooltip: 'Cause a custom error to occur.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_s4d_other_throw_custom_error'] = (block) => {
  const err = javascriptGenerator.valueToCode(block, 'ERROR', javascriptGenerator.ORDER_ATOMIC);
  return `throw ${err ? err : null}`;
};

// hosting websites YAYAYAY
Blockly.Blocks['jg_express_website_on_page_on_request_type_do'] = {
  init: function () {
    this.jsonInit({
      message0: 'on page %1 on request type %2 %3 do %4',
      args0: [
        {
          type: 'input_value',
          name: 'PAGE',
          check: Types.String
        },
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['GET', 'get'],
            ['HEAD', 'head'],
            ['POST', 'post'],
            ['PUT', 'put'],
            ['DELETE', 'delete'],
            ['OPTIONS', 'options'],
            ['PATCH', 'patch'],
            ['All', 'all']
          ]
        },
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'When this page is entered using this request type, the blocks inside will run.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_on_page_on_request_type_do'] = (block) => {
  const page = javascriptGenerator.valueToCode(block, 'PAGE', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `S4D_WEBSITECREATION_EXPRESS_app.${type}(${page}, async function(req, res) {
  ${statements}
});`;
};

restrictToParent(['jg_express_start_website_then_using_port'], 'jg_express_website_on_page_on_request_type_do', 'This block must be in a "start website then" block!');

Blockly.Blocks['jg_express_website_on_invalid_request_do'] = {
  init: function () {
    this.jsonInit({
      message0: 'on invalid request %1 do %2',
      args0: [
        {
          type: 'input_dummy'
        },
        {
          type: 'input_statement',
          name: 'STATEMENTS'
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'When a request fails, the blocks inside will run.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_on_invalid_request_do'] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  return `S4D_WEBSITECREATION_EXPRESS_app.use(function(req, res) {
  ${statements}
});`;
};

restrictToParent(['jg_express_start_website_then_using_port'], 'jg_express_website_on_invalid_request_do', 'This block must be in a "start website then" block!');

Blockly.Blocks['jg_express_website_respond_with_text'] = {
  init: function () {
    this.jsonInit({
      message0: 'respond with text %1',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Sends back text to the page.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_respond_with_text'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return `res.send(String(${text}));`;
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_respond_with_text', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_respond_with_file'] = {
  init: function () {
    this.jsonInit({
      message0: 'respond with file %1',
      args0: [
        {
          type: 'input_value',
          name: 'TEXT',
          check: Types.String
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Sends back the contents of a certain file to the page.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_respond_with_file'] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return `res.sendFile(S4D_WEBSITECREATION_path.join(__dirname, String(${text})));`;
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_respond_with_file', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_respond_with_object'] = {
  init: function () {
    this.jsonInit({
      message0: 'respond with object %1',
      args0: [
        {
          type: 'input_value',
          name: 'OBJECT',
          check: Types.Object
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Sends back an object to the page.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_respond_with_object'] = (block) => {
  const object = javascriptGenerator.valueToCode(block, 'OBJECT', javascriptGenerator.ORDER_ATOMIC);
  return `res.json(${object});`;
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_respond_with_object', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_set_response_status_code_to'] = {
  init: function () {
    this.jsonInit({
      message0: 'set response status code to %1',
      args0: [
        {
          type: 'input_value',
          name: 'STATUS',
          check: Types.Number
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: "Sets the page's status code to the specified number. You can find a status code reference by Right Clicking on this block and clicking Help.",
      helpUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_set_response_status_code_to'] = (block) => {
  const status = javascriptGenerator.valueToCode(block, 'STATUS', javascriptGenerator.ORDER_ATOMIC);
  return `res.status(Number(${status}));`;
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_set_response_status_code_to', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_set_content_type_to'] = {
  init: function () {
    this.jsonInit({
      message0: 'set content type to %1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['application/javascriptGenerator', 'application/javascriptGenerator'],
            ['application/ogg', 'application/ogg'],
            ['application/pdf', 'application/pdf'],
            ['application/json', 'application/json'],
            ['application/ld+json', 'application/ld+json'],
            ['application/xml', 'application/xml'],
            ['application/zip', 'application/zip'],
            ['audio/mpeg', 'audio/mpeg'],
            ['image/gif', 'image/gif'],
            ['image/jpeg', 'image/jpeg'],
            ['image/png', 'image/png'],
            ['image/tiff', 'image/tiff'],
            ['image/x-icon', 'image/x-icon'],
            ['image/svg+xml', 'image/svg+xml'],
            ['text/css', 'text/css'],
            ['text/csv', 'text/csv'],
            ['text/html', 'text/html'],
            ['text/plain', 'text/plain'],
            ['text/xml', 'text/xml'],
            ['video/mpeg', 'video/mpeg'],
            ['video/mp4', 'video/mp4'],
            ['video/x-ms-wmv', 'video/x-ms-wmv'],
            ['video/x-msvideo', 'video/x-msvideo'],
            ['video/x-flv', 'video/x-flv'],
            ['video/webm', 'video/webm']
          ]
        }
      ],
      colour: '#4c8eff',
      previousStatement: null,
      nextStatement: null,
      tooltip: "Sets the page's content type to the specified one.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_set_content_type_to'] = (block) => {
  const type = block.getFieldValue('TYPE');
  return `res.header("Content-Type", '${type}');`;
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_set_content_type_to', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_query_item_parameter'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'TYPE',
          options: [
            ['query item', 'query'],
            ['parameter', 'params']
          ]
        },
        {
          type: 'input_value',
          name: 'ITEM',
          check: Types.String
        }
      ],
      colour: '#4c8eff',
      output: Types.String,
      tooltip: "Gets a certain item from the URL's query items or parameters. (ex: ?item1=yes&item2=no) (ex: /:item)",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_query_item_parameter'] = (block) => {
  const type = block.getFieldValue('TYPE');
  const item = javascriptGenerator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ATOMIC);
  return [`req.${type}[String(${item})]`, javascriptGenerator.ORDER_NONE];
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_query_item_parameter', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_post_request_item'] = {
  init: function () {
    this.jsonInit({
      message0: 'post request item %1',
      args0: [
        {
          type: 'input_value',
          name: 'ITEM',
          check: Types.String
        }
      ],
      colour: '#4c8eff',
      output: Types.Any,
      tooltip: "Gets a certain item from a post request, like the request's body information.",
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_post_request_item'] = (block) => {
  const item = javascriptGenerator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ATOMIC);
  return [`req[String(${item})]`, javascriptGenerator.ORDER_NONE];
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_post_request_item', 'This block must be in a "on page on request type do" block!');

Blockly.Blocks['jg_express_website_set_header_to'] = {
  init: function () {
    this.jsonInit({
      message0: 'set header %1 to %2',
      args0: [
        {
          type: 'input_value',
          name: 'HEADER',
          check: Types.String
        },
        {
          type: 'input_value',
          name: 'VALUE',
          check: Types.Any
        }
      ],
      colour: '#4c8eff',
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Sets a header on the page to a certain value.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_express_website_set_header_to'] = (block) => {
  const header = javascriptGenerator.valueToCode(block, 'HEADER', javascriptGenerator.ORDER_ATOMIC);
  const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
  return `res.header(${header}, ${value});`;
};

restrictToParent(['jg_express_website_on_page_on_request_type_do', 'jg_express_website_on_invalid_request_do'], 'jg_express_website_set_header_to', 'This block must be in a "on page on request type do" block!');

blocklyModule.createMutatorBlock(
  'checkbox',
  {
    blockName: 'jg_testing_urmother_epic_block_test_deez_mf_nuts', // required
    blockData: {
      // required
      message0: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      args0: [],
      colour: '#7b2d9b',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'your mother you tyour hyoyooyoymuyj89898989898989898989898989898989898989',
      helpUrl: ''
    },
    menuTooltip: 'urm om', // optional
    menuUsesBlockColor: true, // optional
    alignLeft: true, // optional
    // all after here are requried
    fields: ['a', 'b', 'c'],
    types: ['String', 'Boolean', 'Colour'],
    names: ['text', 'question', 'color']
  },
  function () {
    // export code function
    return `abc cabbcebwf 8y432900[2]3rf2\\ew`;
  }
);

Blockly.Blocks['jg_testing_epic_menu_api_test_pooop_lolo_fard'] = {
  init: function () {
    this.jsonInit({
      message0: 'Menu API Test %1',
      args0: [
        {
          type: 'field_checkbox',
          name: 'A'
        }
      ],
      colour: '#abc87d'
    });
    this.canLoadMenu = true;
  },
  onchange: function () {
    const bool = this.getFieldValue('A') == 'TRUE';
    if (bool && this.canLoadMenu) {
      this.canLoadMenu = false;
      const menu = blocklyModule.menus.createMenu({
        width: 640, // required, sets the window's width
        height: 360, // required, sets the window's height (not including top bar)
        title: 'Test Window', // not required, sets the window's title
        animateCloseButton: true // not required, enables or disables the window going offscreen on close button click
        // zindex: number will set the z-index style attribute for the menu (defaults at 10 million)
        // lerp: number will set the interpolation amount when moving the window
        // canclose: false will remove the close button
        // canminimize: false will remove the minimize button
      });
      menu.onclosed = () => {
        // fired when menu.close() is fired
        this.setColour(Math.round(Math.random() * 360));
      };
      const header = document.createElement('h1');
      header.innerHTML = 'Menu API Test';
      menu.content.append(header);
      const p = document.createElement('p');
      p.innerHTML = "Menus are made using the blocklyModule function. Check this block's code for the code example shown here.";
      menu.content.append(p);
      const input = document.createElement('input');
      input.value = 'HTML Inputs';
      menu.content.append(input);
      const button = menu.createDecoratedButton();
      button.innerHTML = 'Decorated Buttons';
      menu.content.append(button);
      const button2 = document.createElement('button');
      button2.innerHTML = 'Default Buttons';
      menu.content.append(button2);
    } else if (!bool) {
      this.canLoadMenu = true;
    }
  },
  isHiden: true
};

javascriptGenerator.forBlock['jg_testing_epic_menu_api_test_pooop_lolo_fard'] = function () {
  return '';
};

Blockly.Blocks['jg_tests_u98ewhg87fuinweo_googogjoooj_dynamic_mutator_time_mf'] = {
  init: function () {
    this.jsonInit({
      message0: 'poop farda a a wa w %1 %2',
      args0: [
        {
          type: 'field_checkbox',
          name: 'A'
        },
        {
          type: 'field_checkbox',
          name: 'B'
        }
      ]
    });
  },
  onchange: function () {
    let ch1 = false;
    let ch2 = false;
    let ch3 = false;
    if (this.getFieldValue('A') == 'TRUE') {
      ch1 = true;
      this.getField('A').setValue(false);
    }
    if (this.getFieldValue('B') == 'TRUE') {
      ch2 = true;
      this.getField('B').setValue(false);
    }
    // if (this.getFieldValue("C") == "TRUE") {
    //     ch3 = true
    //     this.getField("C").setValue(false)
    // }
    if (ch1) {
      blocklyModule.setMutatorOnBlock(this, 'checkbox', {
        menuId: 1000,
        menuTooltip: 'a1', // optional
        alignLeft: true, // optional
        fields: ['a', 'b', 'c'],
        types: ['String', 'Boolean', 'Colour'],
        names: ['text', 'question', 'color']
      });
    }
    if (ch2) {
      blocklyModule.setMutatorOnBlock(this, 'checkbox', {
        menuId: 1001,
        menuTooltip: 'a2', // optional
        alignLeft: true, // optional
        fields: ['a', 'b', 'c'],
        types: ['String', 'Boolean', 'Colour'],
        names: ['text2', 'question2', 'color2']
      });
    }
    if (ch3) {
      blocklyModule.setMutatorOnBlock(this, 'builder', {
        menuId: 1001,
        toolbox: ['jg_express_website_set_header_to', 'jg_express_website_set_content_type_to'] // array of block IDs in the toolbox
      });
    }
  },
  isHiden: true
};

javascriptGenerator.forBlock['jg_tests_u98ewhg87fuinweo_googogjoooj_dynamic_mutator_time_mf'] = function () {
  return '';
};

// Jimp Update 2
function ezBlock(name, json, jsCallback) {
  Blockly.Blocks[name] = {
    init: function () {
      this.jsonInit(json);
    }
  };
  javascriptGenerator.forBlock[name] = jsCallback;
}

const JimpBlockColor = '#9951f0';

ezBlock(
  'jg_jimp_update2rd_createNewImage',
  {
    message0: 'create jimp image with url/buffer/file %1 then %2 if image cannot be used %3 do %4',
    args0: [
      {
        type: 'input_value',
        name: 'FILE',
        check: ['String', 'Buffer', 'buffer']
      },
      {
        type: 'input_statement',
        name: 'THEN'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_statement',
        name: 'ERROR'
      }
    ],
    colour: JimpBlockColor,
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: `Creates a new "Jimp" type image using the provided buffer, url to an image, or file containing an image. When created, the first statements will run. If the image cannot be used or another error occurs, the second statements will run.`
  },
  (block) => {
    const file = javascriptGenerator.valueToCode(block, 'FILE', javascriptGenerator.ORDER_ATOMIC);
    const main_Statements = javascriptGenerator.statementToCode(block, 'THEN');
    const errorStatements = javascriptGenerator.statementToCode(block, 'ERROR');
    return `jimp.read(${file}).then(async S4D_APP_JIMP__JIMPIMAGE_CREATED_821926501243i => {
  ${main_Statements}
}).catch(async err => {
  ${errorStatements}
})`;
  }
);
ezBlock(
  'jg_jimp_update2rd_created_image',
  {
    message0: 'created jimp image',
    args0: [],
    colour: JimpBlockColor,
    output: 'JimpImage',
    tooltip: `Creates a new "Jimp" type image using the provided buffer, url to an image, or file containing an image. When created, the first statements will run. If the image cannot be used or another error occurs, the second statements will run.`
  },
  () => {
    return [`S4D_APP_JIMP__JIMPIMAGE_CREATED_821926501243i`, javascriptGenerator.ORDER_NONE];
  }
);

restrictToParent(['jg_jimp_update2rd_createNewImage'], 'jg_jimp_update2rd_created_image', `This block can only be used in "create jimp image" blocks!`);

ezBlock(
  'jg_jimp_update2rd_saveImage',
  {
    message0: 'save jimp image %1 as %2',
    args0: [
      {
        type: 'input_value',
        name: 'IMAGE',
        check: ['JimpImage']
      },
      {
        type: 'input_value',
        name: 'FILE',
        check: Types.String
      }
    ],
    colour: JimpBlockColor,
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    tooltip: `Saves the specified image as the file name.`
  },
  (block) => {
    const image = javascriptGenerator.valueToCode(block, 'IMAGE', javascriptGenerator.ORDER_ATOMIC);
    const name = javascriptGenerator.valueToCode(block, 'FILE', javascriptGenerator.ORDER_ATOMIC);
    return `await ${image}.writeAsync(String(${name}));`;
  }
);
