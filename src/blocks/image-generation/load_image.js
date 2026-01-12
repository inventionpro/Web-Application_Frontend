import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'load_image';

const blockData = {
  message0: 'load image %1',
  args0: [
    {
      type: 'input_value',
      name: 'TOLOAD',
      check: ['ImageBuffPng']
    }
  ],
  colour: '#4C97FF',
  output: 'image',
  tooltip: 'Load a image to use.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const toload = javascriptGenerator.valueToCode(block, 'TOLOAD', javascriptGenerator.ORDER_ATOMIC);
  const code = [`new Discord.MessageAttachment(${toload}, "image.png")`, javascriptGenerator.ORDER_NONE];
  return code;
};
