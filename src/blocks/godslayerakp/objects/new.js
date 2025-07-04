import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'gsa_new_object_creator_empty_search_moment_searchMoment';

const blockData = {
  message0: 'create new object with %2 %1',
  args0: [
    {
      type: 'input_statement',
      check: 'object',
      name: 'STATEMENTS'
    },
    {
      type: 'input_dummy'
    }
  ],
  output: 'Object',
  inputsInline: false,
  colour: '#BA4A9A',
  tooltip: 'creates a new object with components',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  return [
    `
{
  ${JavaScript.statementToCode(block, 'STATEMENTS', JavaScript.ORDER_ATOMIC)}
}`,
    JavaScript.ORDER_ATOMIC
  ];
};
