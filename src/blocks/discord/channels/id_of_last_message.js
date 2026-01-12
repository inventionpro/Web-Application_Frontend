import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_channel_message_id';

const blockData = {
  message0: 'Id of last message in channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    }
  ],
  colour: '#4C97FF',
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
  return [`${channel}.lastMessageId`, javascriptGenerator.ORDER_NONE];
};
