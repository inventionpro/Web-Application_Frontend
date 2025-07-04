import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 'send_on_channel';

const blockData = {
  message0: 'send in channel %1 image %2',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'IMAGE',
      check: 'image'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: 'Send the image in a channel.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const image = JavaScript.valueToCode(block, 'IMAGE', JavaScript.ORDER_ATOMIC);
  let code = `${channel}.send({files:[${image}]});\n`;
  return code;
};
