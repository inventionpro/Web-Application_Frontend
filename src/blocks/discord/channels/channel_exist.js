import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_channel_exist';
const blockData = {
  message0: 'channel %1 exist?',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    }
  ],
  output: Types.Boolean,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  return [`typeof ${channel} !== undefined`, javascriptGenerator.ORDER_NONE];
};
