import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_text_booleanfrom';

const blockData = {
  message0: 'boolean from text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: null
    }
  ],
  colour: '%{BKY_TEXTS_HUE}',
  output: 'Boolean',
  tooltip: 'Gets the text and checks if it equals "true."',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_ATOMIC);
  const code = [`((${text}).toLowerCase() == 'true')`, JavaScript.ORDER_NONE];
  return code;
};
