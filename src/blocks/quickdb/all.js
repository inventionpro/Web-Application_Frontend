import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'qdb_all';
const blockData = {
  message0: 'Get all data from SQLite DB',
  args0: [],
  output: Types.Object,
  colour: '#5ba58b',
  tooltip: 'Gets all data from database\nOutputs a JSON map',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['await qdb.all()', javascriptGenerator.ORDER_ATOMIC];
};
