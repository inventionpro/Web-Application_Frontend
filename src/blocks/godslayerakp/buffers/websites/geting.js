import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'gsa_http_get_buffer_then';
const blockData = {
  message0: 'buffer request https %1 then %2',
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
    let data = Buffer.alloc(0);
    resp.on("data",async chunk => {
        data = Buffer.concat([data, chunk]);
    });
    resp.on("end",async () => {
        ${statementThen}
    });
});`;
};

Blockly.Blocks['gsa_get_https_response_buffer'] = {
  init: function () {
    this.jsonInit({
      message0: 'buffer',
      output: 'buffer',
      colour: '#AE4FA7',
      tooltip: 'returns the buffer data goten from an https buffer request',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['gsa_get_https_response_buffer'] = function () {
  return ['data', javascriptGenerator.ORDER_ATOMIC];
};
