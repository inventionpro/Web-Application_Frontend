import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_string_to_number';

const blockData = {
  message0: '%{BKY_STRING_TO_NUMBER}',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: ['Number', 'String']
    }
  ],
  output: 'Number',
  colour: '#D14081',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const code = JavaScript.valueToCode(block, 'STRING', JavaScript.ORDER_ATOMIC);
  return [`Number(${code})`, JavaScript.ORDER_NONE];
};
