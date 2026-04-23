import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';
import { Types } from '../types.js';

const blockName = 'jg_button_sendImageMSG';
const blockData = {
  message0: 'Send file %1 and message %3 with button row %4 to channel %2',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['Number', 'String', 'Array', 'Attachment']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'ROW',
      check: Types.String
    }
  ],
  colour: 220,
  previousStatement: null,
  nextStatement: null,
  tooltip: "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const fileNameandLocation = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const fileSendChannel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  var buttonraw = javascriptGenerator.valueToCode(block, 'ROW', javascriptGenerator.ORDER_ATOMIC);
  var buttonraw2 = String(buttonraw).replaceAll('"', '');
  const row = String(buttonraw2).replaceAll("'", '');
  var msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  var stored = `[${fileNameandLocation}]`;
  if (fileNameandLocation.includes("['") || fileNameandLocation.includes('["')) stored = fileNameandLocation;
  if (block.getInput('MESSAGE').connection.targetConnection) {
    const contentType = block.getInput('MESSAGE').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType))
      return `await ${fileSendChannel}.send({
  files: ${stored},
  components: [${row}],
  ...${msg}
});`;
  }
  return `await ${fileSendChannel}.send({
  files: ${stored},
  components: [${row}],
  content: String(${msg})
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['NAME', 'MESSAGE']
  },
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CHANNEL',
    types: ['CHANNEL']
  }
]);
