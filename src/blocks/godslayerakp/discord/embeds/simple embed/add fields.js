import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS', javascriptGenerator.ORDER_ATOMIC);
  const code = `fields: [
${statements}
	], 
`;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};
