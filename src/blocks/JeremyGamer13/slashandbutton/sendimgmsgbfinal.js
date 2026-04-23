import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_messages_files_send_reply_with_file_and_message_with_button_row_as_hidden';
const blockData = {
  message0: '%5 reply with file %1 and message %3 with button row %4 as hidden? %2',
  inputsInline: false,
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['Number', 'String', 'Array', 'Attachment']
    },
    {
      type: 'input_value',
      name: 'HIDE',
      check: Types.Boolean
    },
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'ROW',
      check: ['String', 'ButtonRow']
    },
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['send', 'interaction.reply'],
        ['edit', 'interaction.editReply']
      ]
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Tooltip is loading, please wait...',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  onchange: function () {
    let type = String(this.getFieldValue('TYPE'));
    if (type == 'interaction.editReply') {
      this.setColour('#478ded');
      this.setTooltip("This edits the reply to have the file with the matching file name, extension, and directory for a file saved in your bot's files. Edited replies cannot change the hidden state of the reply. Supports (most) embeds and normal text. (Slash command block)");
    } else {
      this.setColour('#4C97FF');
      this.setTooltip("This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text. (Slash command block)");
    }
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const fileNameandLocation = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const hidden = javascriptGenerator.valueToCode(block, 'HIDE', javascriptGenerator.ORDER_ATOMIC);
  const row = String(javascriptGenerator.valueToCode(block, 'ROW', javascriptGenerator.ORDER_ATOMIC))
    .replaceAll('"', '')
    .replaceAll("'", '');
  const type = block.getFieldValue('TYPE');
  let msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  let rowMSG = '';
  let hidden2 = `
    ephemeral: ${hidden},`;
  if (String(type) == 'interaction.editReply' || (hidden !== '' && !hidden)) hidden2 = '';
  let stored = `[${fileNameandLocation}]`;
  if (fileNameandLocation.includes("['") || fileNameandLocation.includes('["')) stored = fileNameandLocation;
  if (row !== '') rowMSG = `components: [${row}],`;
  if (block.getInput('MESSAGE').connection.targetConnection) {
    const contentType = block.getInput('MESSAGE').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType))
      return `${type}({
  files: ${stored},${hidden2}
  ${rowMSG}
  ...${msg}
});`;
  }
  return `${type}({
  files: ${stored},${hidden2}
  ${rowMSG}
  content: String(${msg})
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['NAME']
  }
]);
