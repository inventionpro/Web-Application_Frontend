import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_set_data';

const blockData = {
  message0: '%{BKY_SET_DATA}',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'VALUE'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  return `s4d.database.set(String(${key}), ${value});\n`;
};
