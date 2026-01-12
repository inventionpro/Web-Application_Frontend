import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_text_isboolean';

const blockData = {
  message0: 'text %1 is boolean?',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: null
    }
  ],
  colour: '%{BKY_TEXTS_HUE}',
  output: 'Boolean',
  tooltip: 'Checks if the input text is either "true" or "false" regardless of capitalizations.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  const code = [`((${text}).toLowerCase() == 'true' || (${text}).toLowerCase() == 'false')`, javascriptGenerator.ORDER_NONE];
  return code;
};
