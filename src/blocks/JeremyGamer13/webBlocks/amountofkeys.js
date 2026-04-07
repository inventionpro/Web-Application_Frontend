import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_keycount';
const blockData = {
  message0: '# of keys in data file',
  args0: [],
  output: Types.Any,
  colour: 230,
  tooltip: 'Gets the amount of keys in the current data file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`Object.keys(JSONdataS4D).length`, javascriptGenerator.ORDER_NONE];
};
