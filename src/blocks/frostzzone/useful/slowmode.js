import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_slowmode';

const blockData = {
  message0: 'Set slowmode of channel %1 to (seconds) %2 with reason %3',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'TIME',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'REASON',
      check: 'String'
    }
  ],
  colour: '#a55b80',
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
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const time = JavaScript.valueToCode(block, 'TIME', JavaScript.ORDER_ATOMIC);
  const reason = JavaScript.valueToCode(block, 'REASON', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.setRateLimitPerUser(${time}, ${reason});\n`;
  return code;
};
