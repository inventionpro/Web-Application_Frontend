import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_minecraft_rcon_disconnect';

const blockData = {
  message0: 'disconnect from RCON',
  inputsInline: true,
  args0: [],
  colour: 160,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Close the RCON client.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = `await S4D_APP_MC_RCON_CLIENT.close()
  `;
  return code;
};
