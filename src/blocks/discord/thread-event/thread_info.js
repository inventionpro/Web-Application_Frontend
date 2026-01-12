import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_thread_info';

const blockData = {
  message0: '%1 of thread %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['owner id', 'ownerId'],
        ['date of archival', 'archivedAt'],
        ['archive duration', 'autoArchiveDuration'],
        ['creation date', 'createdAt'],
        ['member count', 'members.cache.size']
      ]
    },
    {
      type: 'input_value',
      name: 'CHANNEL'
    }
  ],
  colour: '#50a6c9',
  output: 'String',
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
  const info = block.getFieldValue('INFO');
  return [`${channel}.${info}`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_VALID_CHANNEL',
    types: ['CHANNEL']
  }
]);
