import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_menu_value';

const blockData = {
  message0: '%{BKY_MENU_VALUE}',
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
  const code = ['i.values[0]', JavaScript.ORDER_NONE];
  return code;
};
