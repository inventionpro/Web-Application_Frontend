import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'ahq_bdwrd_cn';

const blockData = {
  message0: 'censored version of %1',
  args0: [
    {
      type: 'input_value',
      name: 'BAD',
      check: ['String']
    }
  ],
  colour: '#3366ff',
  output: 'String',
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
  const code = [`(censor.censor(String(${data})))`, javascriptGenerator.ORDER_ATOMIC];
  return code;
};
