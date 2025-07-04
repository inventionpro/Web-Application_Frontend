import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_http_get_then';

const blockData = {
  message0: '%{BKY_HTTP_GET_THEN}',
  args0: [
    {
      type: 'input_value',
      name: 'HTTPS',
      check: ['Number', 'String']
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

JavaScript[blockName] = function (block) {
  const https = JavaScript.valueToCode(block, 'HTTPS', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const code = `https.get(${https}, async resp => {\nlet data2 = "";\nresp.on("data",async chunk => {\ndata2 += chunk;\n});\nresp.on("end",async () => {\nlet data = JSON.parse(data2)\n ${statementThen} \n});\n})\n.on("error",async err => {\nconsole.log("Error: " + err.message);\n});\n`;
  return code;
};
