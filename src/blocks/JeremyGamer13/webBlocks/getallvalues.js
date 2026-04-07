import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_allval';
const blockData = {
  message0: 'Get all values in data file',
  args0: [],
  output: Types.Any,
  colour: 230,
  tooltip: 'Gets all the values in a data file, and seperates them with a comma.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`Object.values(JSONdataS4D)`, javascriptGenerator.ORDER_NONE];
};
