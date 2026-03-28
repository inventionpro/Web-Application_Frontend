import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_get_all_data2';
const blockData = {
  message0: 'Get all data from dootabase',
  args0: [],
  output: Types.Object,
  colour: '#50a153',
  tooltip: 'Gets all data from dootabase\nOutputs a JSON map',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['dootabase.all()', javascriptGenerator.ORDER_ATOMIC];
};
