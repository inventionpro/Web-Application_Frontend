import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_fs_read';

const blockData = {
  message0: 'Read file %1 then %2',
  args0: [
    {
      type: 'input_value',
      name: 'FILE',
      check: ['String', 'var']
    },
    {
      type: 'input_statement',
      name: 'THEN'
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

JavaScript[blockName] = function (block) {
  const file = JavaScript.valueToCode(block, 'FILE', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');

  const code = `await fs.readFile(${file}, async function(err, data) {\n ${statementThen} \n});\n`;
  return code;
};
