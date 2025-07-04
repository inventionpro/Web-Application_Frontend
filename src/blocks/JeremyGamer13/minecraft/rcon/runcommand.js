import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'jg_minecraft_rcon_send_command';

const blockData = {
  message0: 'send command %1',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'COMMAND',
      check: 'String'
    }
  ],
  colour: 160,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Send a minecraft command to the server using RCON. You do not need a slash at the beginning of the command.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var command = JavaScript.valueToCode(block, 'COMMAND', JavaScript.ORDER_ATOMIC);
  if (command.charAt(0) == '/') {
    command = command.substring(1);
  }
  const code = `await S4D_APP_MC_RCON_CLIENT.run(${command});
  `;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['COMMAND']
  }
]);
