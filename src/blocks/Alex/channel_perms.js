import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'channel_perms';

const blockData = {
  message0: '%1 permission %2 in channel %3 to member / role / everyone in the server %4',
  args0: [
    {
      type: 'field_dropdown',
      name: 'ad',
      options: [
        ['allow', 'true'],
        ['deny', 'false']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'perm',
      options: [
        ['create instant invite', 'CREATE_INSTANT_INVITE'],
        ['view channel', 'VIEW_CHANNEL'],
        ['send messages', 'SEND_MESSAGES'],
        ['send TTS messages', 'SEND_TTS_MESSAGES'],
        ['manage messages', 'MANAGE_MESSAGES'],
        ['embed links', 'EMBED_LINKS'],
        ['attach files', 'ATTACH_FILES'],
        ['read message history', 'READ_MESSAGE_HISTORY'],
        ['mention everyone', 'MENTION_EVERYONE']
      ]
    },
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'to',
      check: ['Member', 'Role', 'Everyone', 'Server']
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#0c97f0',
  tooltip: 'Edit permissions on a channel.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const trufal = block.getFieldValue('ad');
  const perm = block.getFieldValue('perm');
  let to = JavaScript.valueToCode(block, 'to', JavaScript.ORDER_ATOMIC);
  let contentType = null;
  try {
    contentType = block.getInput('to').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('to').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
  } catch {
    contentType = null;
  }
  if (String(contentType) === 'Server') to = `(${to} || {}).id`;
  const channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.permissionOverwrites.edit(${to}, { ${perm}: ${trufal} });`;
  return code;
};
