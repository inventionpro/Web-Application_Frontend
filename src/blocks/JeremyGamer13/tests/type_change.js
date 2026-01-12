import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_tests_typeChange';

const blockData = {
  message0: 'Type Change',
  args0: [],
  colour: 0,
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  isHiden: true
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ``;
  return code;
};
