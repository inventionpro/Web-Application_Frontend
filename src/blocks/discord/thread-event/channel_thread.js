import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_thread_channel';

const blockData = {
  message0: '%{BKY_CHANNEL_OF_THREAD}',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    }
  ],
  colour: '#50a6c9',
  output: 'Channel',
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
  return [`${channel}.parent`, JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_VALID_CHANNEL',
    types: ['CHANNEL']
  }
]);
