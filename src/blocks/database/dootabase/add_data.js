import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_add_data2';

const blockData = {
  message0: 'In dootabase add %1 to %2',
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
  colour: '#50a153',
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
  return `dootabase.add(String(${key}), parseInt(${count}));\n`;
};
