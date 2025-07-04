import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_position_of_channel';

const blockData = {
  type: 'monaco_position_of_channel',
  message0: 'Position of channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    }
  ],
  colour: '#4C97FF',
  output: 'Number',
  inputsInline: true,
  tooltip: 'Gets the position of any channel.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_position_of_channel'] = function (block) {
  var value_channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  var code = `${value_channel}.position`;
  return [code, JavaScript.ORDER_NONE];
};
