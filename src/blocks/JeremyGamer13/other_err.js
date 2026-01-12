import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'frost_other_err';

const blockData = {
  message0: 'error',
  args0: [],
  output: ['Boolean', 'String'],
  colour: '#D14081',
  tooltip: 'Used in the "if error" part of the "try, if error" block.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['err', javascriptGenerator.ORDER_NONE];
  return code;
};
