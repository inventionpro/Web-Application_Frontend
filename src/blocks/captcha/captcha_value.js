import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'captcha_value';
const blockData = {
  message0: 'Captcha Value',
  args0: [],
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
  return ['captcha.value', javascriptGenerator.ORDER_NONE];
};
