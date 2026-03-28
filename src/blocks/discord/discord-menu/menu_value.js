import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_menu_value';
const blockData = {
  message0: '%{BKY_MENU_VALUE}',
  colour: '#187795',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.values[0]', javascriptGenerator.ORDER_NONE];
};
