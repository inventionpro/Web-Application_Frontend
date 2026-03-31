import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'frost_webserver';
const blockData = {
  type: 'block_type',
  message0: 'Create webserver with text %1',
  args0: [
    {
      type: 'input_value',
      name: 'URL',
      check: Types.String
    }
  ],
  colour: '#F46580',
  tooltip: 'Start a webserver on port 3000, this can be used for tools like uptimerobot.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'URL', javascriptGenerator.ORDER_ATOMIC);
  return `const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(${value});
});
server.listen(3000);`;
};
