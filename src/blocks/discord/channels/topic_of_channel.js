import * as Blockly from 'blockly/core';

const blockName = 's4d_channel_topic';

const blockData = {
  message0: 'Topic of channel %1',
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

Blockly.JavaScript[blockName] = function (block) {
  const channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${channel}.topic`, Blockly.JavaScript.ORDER_NONE];
};
