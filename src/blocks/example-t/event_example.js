import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'jg_example_event';
const blockData = {
  message0: 'example event %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'BLOCKS'
    }
  ],
  colour: 300,
  tooltip: 'An example event block.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const blocks = javascriptGenerator.statementToCode(block, 'BLOCKS');
  const code = `
${blocks}
`;
  return code;
};
