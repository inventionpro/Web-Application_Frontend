import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_getjava';

const blockData = {
  message0: 'get java minecraft server with IP %1 port %2 then %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'IP',
      check: ['String', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'PORT',
      check: ['String', 'var', 'Env', 'Number']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: 120,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Get a java minecraft server to grab it's information.",
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
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  const code = `let S4D_APP_MC_GET_OPTIONS = {
        timeout: 35000
    };
    S4D_APP_MC_GET.status(String(${ip}), Number(${port}), S4D_APP_MC_GET_OPTIONS)
    .then(async (result_java) => {
        ${then}
    });
    `;
  return code;
};
