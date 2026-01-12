import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const print = javascriptGenerator.valueToCode(block, 'PRINT', javascriptGenerator.ORDER_ATOMIC);
  return `console.log(${print});\n`;
};
