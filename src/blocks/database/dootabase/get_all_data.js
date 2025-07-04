import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_get_all_data2';

const blockData = {
  message0: 'Get all data from dootabase',
  args0: [],
  output: 'JSON',
  colour: '#50a153',
  tooltip: 'Gets all data from dootabase\nOutputs a JSON map',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return ['dootabase.all()', JavaScript.ORDER_ATOMIC];
};
