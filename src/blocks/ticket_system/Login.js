import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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
  tooltip: 'Login into mongo with a url',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'URL', javascriptGenerator.ORDER_ATOMIC);
  const code = `ticket.start(s4d.client, ${value}, true);`;
  return code;
};
