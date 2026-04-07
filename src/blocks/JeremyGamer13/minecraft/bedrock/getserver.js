import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

const blockName = 'jg_minecraft_bedrock_get';
const blockData = {
  message0: 'get bedrock minecraft server with IP %1 port %2 then %3 %4',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const ip = javascriptGenerator.valueToCode(block, 'IP', javascriptGenerator.ORDER_ATOMIC);
  const port = javascriptGenerator.valueToCode(block, 'PORT', javascriptGenerator.ORDER_ATOMIC);
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  return `S4D_APP_MC_BEDROCK_GET.statusBedrock({ ip: String(${ip}), port: Number(${port}) })
  .then(async (result_bedrock) => {
${then}
});`;
};
