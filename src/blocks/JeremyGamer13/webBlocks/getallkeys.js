import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_allkey';

const blockData = {
  message0: 'Get all keys in data file',
  args0: [],
  output: null,
  colour: 230,
  tooltip: 'Gets all the key names in a data file, and seperates them with a comma.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`Object.keys(JSONdataS4D)`, JavaScript.ORDER_NONE];
  return code;
};
