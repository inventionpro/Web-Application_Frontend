import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'b_row_comp';

const blockData = {
  message0: '%{BKY_B_ROW_COMP}',
  args0: [
    {
      type: 'input_value',
      name: 'BUTTON',
      check: 'String'
    }
  ],
  colour: '#4C97FF',
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
  const button = JavaScript.valueToCode(block, 'BUTTON', JavaScript.ORDER_ATOMIC);
  let text1 = button.replace("'", '');
  let button2 = text1.replace("'", '');
  const code = `.addComponents(${button2})\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'B_ROW',
    types: ['b_row']
  }
]);
