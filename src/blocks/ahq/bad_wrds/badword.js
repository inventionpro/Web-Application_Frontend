import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'ahq_bdwrd';

const blockData = {
  message0: '%1 is bad word?',
  args0: [
    {
      type: 'input_value',
      name: 'BAD',
      check: ['String']
    }
  ],
  colour: '#ff0000',
  output: 'Boolean',
  tooltip: 'Check if text has bad words.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const data = JavaScript.valueToCode(block, 'BAD', JavaScript.ORDER_ATOMIC);
  const code = [`(censor.check(String(${data})))`, JavaScript.ORDER_ATOMIC];
  return code;
};
