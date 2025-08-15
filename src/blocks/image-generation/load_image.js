import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const toload = JavaScript.valueToCode(block, 'TOLOAD', JavaScript.ORDER_ATOMIC);
  const code = [`new Discord.AttachmentBuilder(${toload}, {name: 'image.png'})`, JavaScript.ORDER_NONE];
  return code;
};
