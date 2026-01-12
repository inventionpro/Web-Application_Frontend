import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'sticker_exist';

const blockData = {
  message0: 'Sticker %1 exist?',
  args0: [
    {
      type: 'input_value',
      check: 'Sticker',
      name: 'sticker'
    }
  ],
  output: 'Boolean',
  colour: '#02a836',
  tooltip: 'Checks if a role exists on the server.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const sticker = javascriptGenerator.valueToCode(block, 'sticker', javascriptGenerator.ORDER_ATOMIC);

  const code = [`${sticker}!= null`, javascriptGenerator.ORDER_NONE];
  return code;
};
