import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_push_data_new';

const blockData = {
  type: 's4d_data_push_new',
  message0: 'push %1 %2 to %3 from the database with name %4',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'VALUE',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const name2 = name.substring(1, name.length - 1);
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  return `${name2}.push(String(${key}), ${value});\n`;
};
