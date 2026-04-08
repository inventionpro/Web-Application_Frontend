import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'monaco_position_of_channel';
const blockData = {
  type: 'monaco_position_of_channel',
  message0: 'Position of channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: Types.Channel
    }
  ],
  colour: '#4C97FF',
  output: Types.Number,
  inputsInline: true,
  tooltip: 'Gets the position of any channel.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_position_of_channel'] = (block) => {
  var value_channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.position`, javascriptGenerator.ORDER_NONE];
};
