import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const reply = JavaScript.valueToCode(block, 'REPLY', JavaScript.ORDER_ATOMIC);
  const code = `await i.editReply(${reply})\n`;
  return code;
};
