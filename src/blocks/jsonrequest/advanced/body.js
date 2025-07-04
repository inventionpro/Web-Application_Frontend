import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_data';

const blockData = {
  message0: 'data %1 with value %2',
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
  tooltip: 'Data with a name and a value. Placed in data sections in the send request block.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC).replaceAll("'", '').replaceAll('"', '');
  if (key.charAt(0) == '(') {
    key.replace('(', '');
  }
  if (key.charAt(key.length - 1) == ')') {
    key = key.substring(0, key.length - 1);
  }
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  const code = `${key}: ${value},
    `;
  return code;
};
