import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  return [`${server}.name`, javascriptGenerator.ORDER_NONE];
};
