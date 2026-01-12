import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_web_keycount';

const blockData = {
  message0: '# of keys in data file',
  args0: [],
  output: null,
  colour: 230,
  tooltip: 'Gets the amount of keys in the current data file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`Object.keys(JSONdataS4D).length`, javascriptGenerator.ORDER_NONE];
  return code;
};
