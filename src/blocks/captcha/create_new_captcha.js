import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'create_captcha';

const blockData = {
  message0: 'Create New Captcha',
  args0: [],
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

JavaScript[blockName] = function () {
  const code = `let captcha = new Captcha();\n`;
  return code;
};
