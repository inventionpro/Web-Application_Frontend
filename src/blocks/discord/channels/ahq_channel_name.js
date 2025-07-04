import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_channel_ahq_name';

const blockData = {
  message0: 'Name of channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
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

JavaScript[blockName] = function (block) {
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  return [`${server}.name`, JavaScript.ORDER_NONE];
};
