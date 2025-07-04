import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';

const blockName = 'jg_button_sendImageMSG';

const blockData = {
  message0: 'Send file %1 and message %3 with button row %4 to channel %2',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['Number', 'String', 'var', 'Env', 'Array', 'List', 'Attachment']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: ['Channel']
    },
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: ['String', 'var', 'Env', 'Number', 'Embed', 'MessageEmbed']
    },
    {
      type: 'input_value',
      name: 'ROW',
      check: ['String', 'var', 'Env']
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

JavaScript[blockName] = function (block) {
  //embeds: [
  const fileNameandLocation = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const fileSendChannel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  var buttonraw = JavaScript.valueToCode(block, 'ROW', JavaScript.ORDER_ATOMIC);
  var buttonraw2 = String(buttonraw).replaceAll('"', '');
  const row = String(buttonraw2).replaceAll("'", '');
  var msg = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC);
  var code, embed;
  var stored = `[${fileNameandLocation}]`;
  if (fileNameandLocation.includes("['") || fileNameandLocation.includes('["')) {
    stored = fileNameandLocation;
  }
  if (msg.includes('embeds: [')) {
    embed = true;
  } else {
    embed = false;
  }
  if (embed) {
    code = `await ${fileSendChannel}.send({
        files: ${stored},
        components: [${row}]
        ${msg}
     });
   `;
  } else {
    code = `await ${fileSendChannel}.send({
        files: ${stored},
        components: [${row}]
        content: String(${msg})
     });
   `;
  }
  return code;
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
