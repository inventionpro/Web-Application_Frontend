import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock['monaco_set_channel_position'] = (block) => {
  var value_channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  var value_position = javascriptGenerator.valueToCode(block, 'position', javascriptGenerator.ORDER_ATOMIC);
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_server}.${value_channel}.setPosition(${value_position})\n`;
  return code;
};
