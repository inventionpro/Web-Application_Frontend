import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_wait_seconds';

const blockData = {
  message0: '%{BKY_WAIT_SECONDS}',
  args0: [
    {
      type: 'input_value',
      name: 'TIME',
      check: ['Number', 'String']
    }
  ],
  colour: '#D14081',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Wait an amount of seconds before doing other event.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const time = JavaScript.valueToCode(block, 'TIME', JavaScript.ORDER_ATOMIC);
  return `await delay(Number(${time})*1000);\n`;
};
