import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_multi_data2';

const blockData = {
  message0: 'In dootabase multiply %2 by %1',
  args0: [
    {
      type: 'input_value',
      name: 'COUNT',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  nextStatement: null,
  previousStatement: null,
  colour: '#50a153',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  const count = JavaScript.valueToCode(block, 'COUNT', JavaScript.ORDER_ATOMIC);
  return `dootabase.multiply(String(${key}), parseInt(${count}));\n`;
};
