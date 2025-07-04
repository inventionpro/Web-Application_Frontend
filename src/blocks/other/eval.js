import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_eval';

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
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Run some code.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const code = JavaScript.valueToCode(block, 'EVAL', JavaScript.ORDER_ATOMIC);
  return `eval(${code});
    `;
};
