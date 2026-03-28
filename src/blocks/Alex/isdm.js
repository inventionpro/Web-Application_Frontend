import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'isdm';
const blockData = {
  message0: 'Channel %1 is DM?',
  args0: [
    {
      type: 'input_value',
      check: Types.Channel,
      name: 'channel'
    }
  ],
  output: Types.Boolean,
  colour: '#33a146',
  tooltip: '',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const chan = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  return [`${chan}.type === "DM"`, javascriptGenerator.ORDER_NONE];
};
