import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_add_data';

const blockData = {
  message0: '%{BKY_ADD_DATA}',
  args0: [
    {
      type: 'input_value',
      name: 'COUNT',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  nextStatement: null,
  previousStatement: null,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'KEY', javascriptGenerator.ORDER_ATOMIC);
  const count = javascriptGenerator.valueToCode(block, 'COUNT', javascriptGenerator.ORDER_ATOMIC);
  return `s4d.database.add(String(${key}), parseInt(${count}));\n`;
};
