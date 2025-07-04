import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_channel_exist';

const blockData = {
  message0: 'channel %1 exist?',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    }
  ],
  output: 'Boolean',
  colour: '#4C97FF',
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
  const code = [`typeof ${channel} !== undefined`, JavaScript.ORDER_NONE];
  return code;
};
