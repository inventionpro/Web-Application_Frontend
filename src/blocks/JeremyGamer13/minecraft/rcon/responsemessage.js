import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'jg_minecraft_rcon_command_response';
const blockData = {
  message0: 'command response',
  args0: [],
  colour: 160,
  output: Types.String,
  tooltip: 'The response to the command that was ran by the bot.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['response.message', javascriptGenerator.ORDER_NONE];
};
