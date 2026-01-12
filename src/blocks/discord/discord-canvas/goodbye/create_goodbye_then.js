import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 's4d_create_goodbye_then';
const blockData = {
  message0: '%{BKY_CREATE_GOODBYE_THEN}',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  output: 'Goodbye'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  const code = [`await new canvas.Goodbye()${statementThen}.toAttachment()`, javascriptGenerator.ORDER_NONE];
  return code;
};
