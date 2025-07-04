import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_text_hasnumber';

const blockData = {
  message0: 'text %1 contains numbers?',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: null
    }
  ],
  colour: '%{BKY_TEXTS_HUE}',
  output: 'Boolean',
  tooltip: 'Checks if the input text has a number in it.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_ATOMIC);
  const code = [`(/\\d/.test(${text}))`, JavaScript.ORDER_NONE];
  return code;
};
