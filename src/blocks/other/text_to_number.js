import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const code = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  return [`Number(${code})`, javascriptGenerator.ORDER_NONE];
};
