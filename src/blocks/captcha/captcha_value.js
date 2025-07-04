import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'captcha_value';

const blockData = {
  message0: 'Captcha Value',
  args0: [],
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
  const code = [`captcha.value`, JavaScript.ORDER_NONE];
  return code;
};
