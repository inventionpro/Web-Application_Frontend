// S4D_APP_PKG_axios is the axios package!

import Blockly from 'blockly/core';

const blockName = 'jg_web_request_advanced_header';

const blockData = {
  message0: 'header %1 with value %2',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'VALUE',
      check: null
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'A header with a name and a value.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  if (key.charAt(0) == '(') {
    key.replace('(', '');
  }
  if (key.charAt(key.length - 1) == ')') {
    key = key.substring(0, key.length - 1);
  }
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  const code = `${key}: ${value},
    `;
  return code;
};
