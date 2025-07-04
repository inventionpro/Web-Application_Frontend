import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_get';

const blockData = {
  message0: 'get bedrock minecraft server with IP %1 port %2 then %3 %4',
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
  colour: 190,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Get a minecraft bedrock server to grab it's information.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const ip = JavaScript.valueToCode(block, 'IP', JavaScript.ORDER_ATOMIC);
  const port = JavaScript.valueToCode(block, 'PORT', JavaScript.ORDER_ATOMIC);
  const then = JavaScript.statementToCode(block, 'THEN');
  const code = `S4D_APP_MC_BEDROCK_GET.statusBedrock({ ip: String(${ip}), port: Number(${port}) })
    .then(async (result_bedrock) => {
        ${then}
    });
    `;
  return code;
};
