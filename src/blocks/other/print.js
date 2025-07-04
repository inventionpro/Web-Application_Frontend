import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_print';

const blockData = {
  message0: '%{BKY_PRINT}',
  args0: [
    {
      type: 'input_value',
      name: 'PRINT',
      check: null
    }
  ],
  colour: '#D14081',
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
  const print = JavaScript.valueToCode(block, 'PRINT', JavaScript.ORDER_ATOMIC);
  return `console.log(${print});\n`;
};
