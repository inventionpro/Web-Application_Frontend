import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'test_regex';
const blockData = {
  message0: 'test regex %1 with %2',
  args0: [
    {
      type: 'input_value',
      name: 'REGEX',
      check: Types.RegEx
    },
    {
      type: 'input_value',
      name: 'TEXT',
      check: Types.String
    }
  ],
  output: Types.Boolean,
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const regex = javascriptGenerator.valueToCode(block, 'REGEX', javascriptGenerator.ORDER_ATOMIC);
  const string = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return [`${regex}.test(${string})`, javascriptGenerator.ORDER_NONE];
};
