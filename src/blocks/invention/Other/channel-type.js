import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  var value_channel = JavaScript.valueToCode(block, 'Channel', JavaScript.ORDER_ATOMIC);
  var code = `${value_channel}.type`;
  return [code, JavaScript.ORDER_NONE];
};
