import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'frost_create_field';

const blockData = {
  message0: 'Create fields for embed %2 %1',
  args0: [
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: '#40BF4A',
  output: 'Field',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const code = `${statementThen}`;
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_ANDROZ_EMBED',
    types: ['s4d_message_embed']
  }
]);
