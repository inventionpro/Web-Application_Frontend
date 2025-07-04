import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_minecraft_rcon_when_command_response';

const blockData = {
  message0: 'When the minecraft command gets a response %1 %2',
  colour: '#F5AB1A',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: 'The blocks inside will run when a command gets a response from the server.'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  const code = `S4D_APP_MC_RCON_CLIENT.on('message', async (response) => {
        ${statements}
    });
    `;
  return code;
};
