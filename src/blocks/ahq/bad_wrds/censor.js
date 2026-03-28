import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'ahq_bdwrd_cn';
const blockData = {
  message0: 'censored version of %1',
  args0: [
    {
      type: 'input_value',
      name: 'BAD',
      check: Types.String
    }
  ],
  colour: '#3366ff',
  output: Types.String,
  tooltip: 'A filtered version of the text.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const data = javascriptGenerator.valueToCode(block, 'BAD', javascriptGenerator.ORDER_ATOMIC);
  return [`censor.censor(String(${data}))`, javascriptGenerator.ORDER_ATOMIC];
};
