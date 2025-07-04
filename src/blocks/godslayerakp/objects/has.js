import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'gsa_object_has_value_search_moment';

const blockData = {
  message0: 'object %2 has %1?',
  args0: [
    {
      type: 'input_value',
      name: 'value',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'object',
      check: ['Object', null]
    }
  ],
  output: 'Boolean',
  inputsInline: true,
  colour: '#BA4A9A',
  tooltip: 'checks if an object has somthing',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  return [`${JavaScript.valueToCode(block, 'object', JavaScript.ORDER_ATOMIC)}.hasOwnProperty(String(${JavaScript.valueToCode(block, 'value', JavaScript.ORDER_ATOMIC)}))`, JavaScript.ORDER_ATOMIC];
};
