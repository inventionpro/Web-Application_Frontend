import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_button_click_id';

const blockData = {
  message0: '%{BKY_BUTTON_CLICK_ID}',
  colour: '#187795',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['i.customId', JavaScript.ORDER_NONE];
  return code;
};
