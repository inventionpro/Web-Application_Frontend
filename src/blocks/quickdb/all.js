import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'qdb_all';

const blockData = {
  message0: 'Get all data from SQLite DB',
  args0: [],
  output: 'JSON',
  colour: '#5ba58b',
  tooltip: 'Gets all data from database\nOutputs a JSON map',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  return ['await qdb.all()\n', javascriptGenerator.ORDER_ATOMIC];
};
