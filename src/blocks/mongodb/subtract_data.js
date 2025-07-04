import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'mongo_subtract_data';

const blockData = {
  message0: '%{BKY_SUBTRACT_DATA}',
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
  colour: '#4fc99e',
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
  return `mdb.subtract(${key}, ${count});\n`;
};
