import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_get_all_data_new';

const blockData = {
  message0: 'get all data from the database with name %2 %1',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    }
  ],
  output: ['JSON', 'Array'],
  colour: '#5ba58b',
  tooltip: 'Gets all data from database\nOutputs a JSON map',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const name2 = name.substring(1, name.length - 1);
  return [`${name2}.all()`, javascriptGenerator.ORDER_ATOMIC];
};
