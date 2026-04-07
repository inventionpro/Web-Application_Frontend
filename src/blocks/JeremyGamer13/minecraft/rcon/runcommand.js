import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 'jg_minecraft_rcon_send_command';
const blockData = {
  message0: 'send command %1',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'COMMAND',
      check: Types.String
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

javascriptGenerator.forBlock[blockName] = (block) => {
  var command = javascriptGenerator.valueToCode(block, 'COMMAND', javascriptGenerator.ORDER_ATOMIC);
  if (command.charAt(0) == '/') command = command.substring(1);
  return `await S4D_APP_MC_RCON_CLIENT.run(${command});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['COMMAND']
  }
]);
