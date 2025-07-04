import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'ticket_connect';

const blockData = {
  type: 'block_type',
  message0: 'Login to mongo with the URL %1',
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
  const code = `//ticketv3.0.0 login code\nticket.start(s4d.client, ${value}, true)`;
  return code;
};
