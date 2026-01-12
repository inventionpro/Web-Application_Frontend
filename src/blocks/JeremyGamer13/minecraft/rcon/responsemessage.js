import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_rcon_command_response';

const blockData = {
  message0: 'command response',
  args0: [],
  colour: 160,
  output: 'String',
  tooltip: 'The response to the command that was ran by the bot.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`response.message`, javascriptGenerator.ORDER_NONE];
  return code;
};
