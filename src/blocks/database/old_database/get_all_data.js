import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_get_all_data';

const blockData = {
  message0: 'Get all data from database',
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
  return ['s4d.database.all()', javascriptGenerator.ORDER_ATOMIC];
};
