import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_fs_write';

const blockData = {
  message0: 'Get file %1 and set content to %3 then %2',
  args0: [
    {
      type: 'input_value',
      name: 'FILE',
      check: ['String', 'var']
    },
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['String', 'var']
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
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');

  const code = `fs.writeFileSync(${file}, ${content}, async function (err) {\n ${statementThen} \n});\n`;
  return code;
};
