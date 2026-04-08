import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 's4d_temp_unregister';
const blockData = {
  type: 'block_type',
  message0: 'Unregister a voice channel with the id %1',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNELID',
      check: Types.String
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#48a4f0',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel_id = javascriptGenerator.valueToCode(block, 'CHANNELID', javascriptGenerator.ORDER_ATOMIC);
  return `tempChannels.unregisterChannel(${channel_id});`;
};
