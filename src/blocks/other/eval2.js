import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_eval2';

const blockData = {
  message0: 'run code %1',
  args0: [
    {
      type: 'input_value',
      name: 'EVAL',
      check: ['Number', 'String']
    }
  ],
  colour: '#D14081',
  output: null,
  tooltip: '',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const code = javascriptGenerator.valueToCode(block, 'EVAL', javascriptGenerator.ORDER_ATOMIC);
  return [`eval(${code})`, javascriptGenerator.ORDER_NONE];
};
