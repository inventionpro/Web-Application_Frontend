import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_set_channel_position';

const blockData = {
  message0: 'set channel %1 to position # %2 in server %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'position',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Set a channel to a position.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_set_channel_position'] = function (block) {
  var value_channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  var value_position = JavaScript.valueToCode(block, 'position', JavaScript.ORDER_ATOMIC);
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  var code = `${value_server}.${value_channel}.setPosition(${value_position})\n`;
  return code;
};
