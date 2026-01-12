import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const image = javascriptGenerator.valueToCode(block, 'IMAGE', javascriptGenerator.ORDER_ATOMIC);
  let code = `${channel}.send({files:[${image}]});\n`;
  return code;
};
