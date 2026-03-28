import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'get_image';
const blockData = {
  message0: 'Find image with query  %1  then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'query',
      check: Types.String
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'then',
      align: 'RIGHT'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#05a386',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const Then = javascriptGenerator.statementToCode(block, 'then');
  const query = javascriptGenerator.valueToCode(block, 'query', javascriptGenerator.ORDER_ATOMIC);
  return `let query = ${query};
${Then}`;
};
