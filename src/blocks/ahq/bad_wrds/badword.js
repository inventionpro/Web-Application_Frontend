import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'ahq_bdwrd';
const blockData = {
  message0: '%1 is bad word?',
  args0: [
    {
      type: 'input_value',
      name: 'BAD',
      check: Types.String
    }
  ],
  colour: '#ff0000',
  output: Types.Boolean,
  tooltip: 'Check if text has bad words.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const data = javascriptGenerator.valueToCode(block, 'BAD', javascriptGenerator.ORDER_ATOMIC);
  return [`censor.check(String(${data}))`, javascriptGenerator.ORDER_ATOMIC];
};
