import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_add_data';

const blockData = {
  message0: '%{BKY_ADD_DATA}',
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
  const count = JavaScript.valueToCode(block, 'COUNT', JavaScript.ORDER_ATOMIC);
  return `s4d.database.add(String(${key}), parseInt(${count}));\n`;
};
