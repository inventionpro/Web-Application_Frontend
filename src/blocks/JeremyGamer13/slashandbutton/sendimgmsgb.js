import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_slash_button_sendImageMSG';
const blockData = {
  message0: 'Send file %1 and message %3 with button row %4 as hidden? %2',
  inputsInline: true,
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
      check: Types.String
    }
  ],
  colour: 240,
  previousStatement: null,
  nextStatement: null,
  tooltip: "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text. (Slash command block)",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const fileNameandLocation = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const hidden = javascriptGenerator.valueToCode(block, 'HIDE', javascriptGenerator.ORDER_ATOMIC);
  var buttonraw = javascriptGenerator.valueToCode(block, 'ROW', javascriptGenerator.ORDER_ATOMIC);
  var buttonraw2 = String(buttonraw).replaceAll('"', '');
  const row = String(buttonraw2).replaceAll("'", '');
  var msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  var stored = `[${fileNameandLocation}]`;
  if (fileNameandLocation.includes("['") || fileNameandLocation.includes('["')) stored = fileNameandLocation;
  if (block.getInput('MESSAGE').connection.targetConnection) {
    const contentType = block.getInput('MESSAGE').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType)) return `interaction.reply({
  files: ${stored},
  ephemeral: ${hidden},
  components: [${row}],
  ...${msg}
});`;
  }
  return `interaction.reply({
  files: ${stored},
  ephemeral: ${hidden},
  components: [${row}],
  content: String(${msg})
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['NAME', 'MESSAGE', 'HIDE']
  }
]);
