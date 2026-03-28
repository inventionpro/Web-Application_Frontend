import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'att_url';
const blockData = {
  message0: 'attachment url of message %1',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: Types.Message
    }
  ],
  colour: '#4C97FF',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return [`(${message}.attachments.first()).url`, javascriptGenerator.ORDER_NONE];
};
