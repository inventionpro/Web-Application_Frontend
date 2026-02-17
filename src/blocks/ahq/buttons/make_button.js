import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'make_ahq_button';

const blockData = {
  message0: 'make a button with name %1 %2 then %3',
  args0: [
    {
      type: 'input_value',
      name: 'button name',
      check: ['String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ],
  colour: '#33cc00',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE);
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = javascriptGenerator.statementToCode(block, 'STATEMENTS', javascriptGenerator.ORDER_ATOMIC);
  const code = `let ${finaln} = new Discord.ButtonBuilder()\n${statementsThen}`;
  return code;
};
