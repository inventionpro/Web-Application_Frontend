import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'frost_fs_write';
const blockData = {
  message0: 'Get file %1 and set content to %3 then %2',
  args0: [
    {
      type: 'input_value',
      name: 'FILE',
      check: Types.String
    },
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.String
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const file = javascriptGenerator.valueToCode(block, 'FILE', javascriptGenerator.ORDER_ATOMIC);
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');

  return `fs.writeFileSync(${file}, ${content}, async function (err) {
${statementThen}
});`;
};
