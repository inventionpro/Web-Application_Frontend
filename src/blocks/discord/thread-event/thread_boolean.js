import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_thread_boolean';

const blockData = {
  message0: 'thread %1 is %2?',
  args0: [
    {
      type: 'input_value',
      name: 'THREAD',
      check: 'Channel'
    },
    {
      type: 'field_dropdown',
      name: 'BOOL_TYPE',
      options: [
        ['archived', 'archived'],
        ['locked', 'locked']
      ]
    }
  ],
  output: 'Boolean',
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
  const thread = javascriptGenerator.valueToCode(block, 'THREAD', javascriptGenerator.ORDER_ATOMIC);
  const boolType = block.getFieldValue('BOOL_TYPE');
  const code = [`${thread}.${boolType}`, javascriptGenerator.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'You must specify a valid thread!',
    types: ['THREAD']
  }
]);
