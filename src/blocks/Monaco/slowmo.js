import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_slowmode_of_channel';

const blockData = {
  type: 'monaco_slowmode_of_channel',
  message0: 'Slowmode of channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    }
  ],
  colour: '#4C97FF',
  output: 'number',
  inputsInline: true,
  tooltip: 'Slowmode of a channel in seconds. Only for text channels.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var value_channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  var code = `${value_channel}.rateLimitPerUser`;
  return [code, JavaScript.ORDER_NONE];
};
