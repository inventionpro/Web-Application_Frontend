import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'mongo_connect';

const blockData = {
  type: 'block_type',
  message0: 'Connect to MongoDB %1',
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
  const code = `const mdb = new DB(${value});
    \n`;
  return code;
};
