import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const code = [`(new URL.URL((${message}.attachments.first()).url)).pathname.split("/").reverse()[0]).split(".")[1]`, javascriptGenerator.ORDER_NONE];
  return code;
};
