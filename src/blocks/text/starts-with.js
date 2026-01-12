import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_starts_with';

const blockData = {
  message0: '%{BKY_STARTS_WITH}',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const string = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  const substring = javascriptGenerator.valueToCode(block, 'SUBSTRING', javascriptGenerator.ORDER_ATOMIC);
  const code = [`(${string} || '').startsWith(${substring} || '')`, javascriptGenerator.ORDER_NONE];
  return code;
};
