import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 's4d_http_get_then';
const blockData = {
  message0: '%{BKY_HTTP_GET_THEN}',
  args0: [
    {
      type: 'input_value',
      name: 'HTTPS',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const https = javascriptGenerator.valueToCode(block, 'HTTPS', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  return `https.get(${https}, async resp => {
  let data2 = "";
  resp.on("data", async chunk => {
    data2 += chunk;
  });
  resp.on("end", async () => {
    let data = JSON.parse(data2);
    ${statementThen}
  });
})
  .on("error", async err => {
    console.log("Error: " + err.message);
  });`;
};
