import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_webserver';

const blockData = {
  type: 'block_type',
  message0: 'Create webserver with text %1',
  args0: [
    {
      type: 'input_value',
      name: 'URL',
      check: 'String'
    }
  ],
  colour: '#F46580',
  tooltip: '%{BKY_LOGIN_TOOLTIP}',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_ATOMIC);
  const code = `const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(${value});
});
server.listen(3000);\n`;
  return code;
};
