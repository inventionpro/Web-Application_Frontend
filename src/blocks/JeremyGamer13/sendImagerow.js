import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';

const blockName = 'jg_button_sendImage';

const blockData = {
  message0: 'Send file %1 with button row %3 to channel %2',
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
      name: 'ROW',
      check: ['String', 'var', 'Env']
    }
  ],
  colour: 220,
  previousStatement: null,
  nextStatement: null,
  tooltip: "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const fileNameandLocation = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const fileSendChannel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  var buttonraw = JavaScript.valueToCode(block, 'ROW', JavaScript.ORDER_ATOMIC);
  var buttonraw2 = String(buttonraw).replaceAll('"', '');
  const row = String(buttonraw2).replaceAll("'", '');
  var stored = `[${fileNameandLocation}]`;
  if (fileNameandLocation.includes("['") || fileNameandLocation.includes('["')) {
    stored = fileNameandLocation;
  }
  const code = `await ${fileSendChannel}.send({ 
      files: ${stored},
      components: [${row}]
    });
  `;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['NAME']
  },
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CHANNEL',
    types: ['CHANNEL']
  }
]);
