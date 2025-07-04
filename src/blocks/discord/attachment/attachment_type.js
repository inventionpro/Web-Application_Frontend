import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'att_type';

const blockData = {
  message0: 'attachment type of message %1',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
    }
  ],
  colour: '#4C97FF',
  output: 'String',
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
  const code = [`(new URL.URL((${message}.attachments.first()).url)).pathname.split("/").reverse()[0]).split(".")[1]`, JavaScript.ORDER_NONE];
  return code;
};
