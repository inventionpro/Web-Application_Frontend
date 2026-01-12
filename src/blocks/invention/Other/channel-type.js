import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'inv_channel_type';

const blockData = {
  message0: 'type of channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'Channel'
    }
  ],
  output: 'String',
  colour: '#D14081',
  tooltip: 'Type of channel',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_channel = javascriptGenerator.valueToCode(block, 'Channel', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_channel}.type`;
  return [code, javascriptGenerator.ORDER_NONE];
};
