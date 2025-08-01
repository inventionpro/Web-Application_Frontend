import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_ends_with';

const blockData = {
  message0: '%1 ends with %2',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'SUBSTRING',
      check: ['String']
    }
  ],
  output: 'Boolean',
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const string = JavaScript.valueToCode(block, 'STRING', JavaScript.ORDER_ATOMIC);
  const substring = JavaScript.valueToCode(block, 'SUBSTRING', JavaScript.ORDER_ATOMIC);
  const code = [`(${string} || '').endsWith(${substring} || '')`, JavaScript.ORDER_NONE];
  return code;
};
