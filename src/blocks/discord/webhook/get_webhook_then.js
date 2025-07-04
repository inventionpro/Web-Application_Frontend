import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_get_webhook_then';

const blockData = {
  message0: '%{BKY_GET_WEBHOOK_THEN}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'TOKEN',
      check: ['String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ],
  colour: '#135cc2',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  const token = JavaScript.valueToCode(block, 'TOKEN', JavaScript.ORDER_ATOMIC);
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  return `s4d.client.fetchWebhook(${id},${token}).then(async gwebhook =>{\n${statements}\n});\n`;
};
