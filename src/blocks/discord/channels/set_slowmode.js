import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'slowmode';

const blockData = {
  message0: 'set channel %1 to slowmode %2',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: ['Channel']
    },
    {
      type: 'input_value',
      name: 'NUMBER',
      check: 'Number'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const duration = JavaScript.valueToCode(block, 'NUMBER', JavaScript.ORDER_ATOMIC);
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.setRateLimitPerUser(${duration})\n`;
  return code;
};
