import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_is_channel_nsfw';
const blockData = {
  message0: '%{BKY_IS_CHANNEL_NSFW}',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    }
  ],
  colour: '#4C97FF',
  output: Types.Boolean,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  return [`${channel}.nsfw`, javascriptGenerator.ORDER_NONE];
};
