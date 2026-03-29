import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_updated_thread';
const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'THREAD',
      options: [
        ['new thread', 's4dNewThread'],
        ['old thread', 's4dOldThread']
      ]
    }
  ],
  colour: '#2a97b8',
  output: Types.Channel,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const thread = block.getFieldValue('THREAD');
  return [thread, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'This block can only be used on "When a thread is updated event!"',
    types: ['s4d_on_thread_update']
  }
]);
