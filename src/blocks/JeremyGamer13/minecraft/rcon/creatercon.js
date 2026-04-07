import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'jg_minecraft_rcon_create_client';
const blockData = {
  message0: 'create RCON client and connect to IP %1 using RCON port %2 with password %5 then %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'IP',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'PORT',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_value',
      name: 'PASSWORD',
      check: Types.String
    }
  ],
  colour: 160,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Connect to a Java server using RCON to run commands. RCON must be enabled on the server and match the settings. RCON can run any command on the server including operator commands, so be careful!',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const ip = javascriptGenerator.valueToCode(block, 'IP', javascriptGenerator.ORDER_ATOMIC);
  const port = javascriptGenerator.valueToCode(block, 'PORT', javascriptGenerator.ORDER_ATOMIC);
  const password = javascriptGenerator.valueToCode(block, 'PASSWORD', javascriptGenerator.ORDER_ATOMIC);
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  return `let S4D_APP_MC_RCON_CLIENT_OPTIONS = {
  timeout: 5000
};
var S4D_APP_MC_RCON_CLIENT = new S4D_APP_MC_GET.RCON();
await S4D_APP_MC_RCON_CLIENT.connect(String(${ip}), Number(${port}), S4D_APP_MC_RCON_CLIENT_OPTIONS);
await S4D_APP_MC_RCON_CLIENT.login(String(${password}), S4D_APP_MC_RCON_CLIENT_OPTIONS);
${then}`;
};
