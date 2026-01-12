import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_button_edit';

const blockData = {
  message0: '%{BKY_BUTTON_EDIT}',
  args0: [
    {
      type: 'input_value',
      name: 'REPLY',
      check: ['String', 'Number']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const reply = javascriptGenerator.valueToCode(block, 'REPLY', javascriptGenerator.ORDER_ATOMIC);
  const code = `await i.editReply(${reply})\n`;
  return code;
};
