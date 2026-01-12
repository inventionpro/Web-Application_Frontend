import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_set_db2';

const blockData = {
  message0: 'Set current dootabase to %1 .json',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  previousStatement: null,
  nextStatement: null,
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
  return `dootabase.setFile("./"+ ${key}+".json");\n`;
};
