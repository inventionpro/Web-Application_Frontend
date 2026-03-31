import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'frost_slash_sub_command';
const blockData = {
  message0: 'Create Sub Command Name %1 Description %2 %3 Options %4',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'DESC',
      check: Types.String
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'OPTIONS'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#3d79cc',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  var desc = javascriptGenerator.valueToCode(block, 'DESC', javascriptGenerator.ORDER_ATOMIC);
  var options = javascriptGenerator.statementToCode(block, 'OPTIONS');
  return `{
  name: ${name.toLowerCase()},
  description: ${desc},
  type: 1,
  options: [
    ${options}
  ]
},`;
};
