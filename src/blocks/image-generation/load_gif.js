import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'load_gif';

const blockData = {
  message0: 'load gif %1',
  args0: [
    {
      type: 'input_value',
      name: 'TOLOAD',
      check: ['ImageBuffGif']
    }
  ],
  colour: '#4C97FF',
  output: 'image',
  tooltip: 'Load a GIF to use.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const toload = javascriptGenerator.valueToCode(block, 'TOLOAD', javascriptGenerator.ORDER_ATOMIC);
  const code = [`new Discord.AttachmentBuilder(${toload}, {name: 'image.gif'})`, javascriptGenerator.ORDER_NONE];
  return code;
};
