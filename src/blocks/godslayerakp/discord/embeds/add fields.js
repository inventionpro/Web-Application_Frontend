import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'gsa_create_fields';

const blockData = {
  type: 'gsa_create_fields',
  message0: 'add fields %2 %1',
  args0: [
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    },
    {
      type: 'input_dummy'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  colour: 120,
  tooltip: 'must be in a make embed with name block',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'STATEMENTS', JavaScript.ORDER_ATOMIC);
  return `fields: [
${statements}
	],
`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "create embed with name () then" block!',
    types: ['gsa_create_embed']
  }
]);
