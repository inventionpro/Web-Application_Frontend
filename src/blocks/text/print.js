import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_print';

const blockData = {
  message0: '%{BKY_PRINT}',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: ['Number', 'String']
    }
  ],
  colour: '#5BA55B',
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
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  return `console.log(${value})\n`;
};
