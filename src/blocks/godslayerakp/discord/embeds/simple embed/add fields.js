import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'gsa_create_simple_embed_fields';

const blockData = {
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
  output: blockName,
  inputsInline: false,
  colour: '#40BF4A',
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
  const code = `fields: [
${statements}
	], 
`;
  return [code, JavaScript.ORDER_ATOMIC];
};
