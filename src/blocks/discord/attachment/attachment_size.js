import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'att_size';

const blockData = {
  message0: 'is there a attachment on message %1?',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
    }
  ],
  colour: '#187795',
  output: 'Boolean',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const message = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC);
  const code = [`${message}.attachments.size !== 0`, JavaScript.ORDER_NONE];
  return code;
};
