import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = '1imagegif';

const blockData = {
  message0: '(gif) new triggered of image %1',
  args0: [
    {
      type: 'input_value',
      name: 'IMAGE',
      check: ['Number', 'String']
    }
  ],
  output: 'ImageBuffGif',
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const image = javascriptGenerator.valueToCode(block, 'IMAGE', javascriptGenerator.ORDER_ATOMIC);
  const code = [`await new DIG.Triggered().getImage(${image})`, javascriptGenerator.ORDER_NONE];
  return code;
};
