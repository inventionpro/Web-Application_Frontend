import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 's4d_create_rankcard_then';
const blockData = {
  message0: '%{BKY_CREATE_RANKCARD_THEN}',
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
  output: 'Rankcard'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  const code = [`await new canvas.RankCard()${statementThen}.toAttachment()`, javascriptGenerator.ORDER_NONE];
  return code;
};
