import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_thread_id';

const blockData = {
  message0: 'id of thread %1',
  args0: [
    {
      type: 'input_value',
      name: 'THREAD',
      check: 'Channel'
    }
  ],
  colour: '#2a97b8',
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
  const thread = javascriptGenerator.valueToCode(block, 'THREAD', javascriptGenerator.ORDER_ATOMIC);
  return [`${thread}.id`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_THREAD',
    types: ['THREAD']
  }
]);
