import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'isdm';

const blockData = {
  message0: 'Channel %1  is DM?',
  args0: [
    {
      type: 'input_value',
      check: 'Channel',
      name: 'channel'
    }
  ],
  output: 'Boolean',
  colour: '#33a146',
  tooltip: '',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const chan = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  const code = [`${chan}.type === "DM"`, JavaScript.ORDER_NONE];
  return code;
};
