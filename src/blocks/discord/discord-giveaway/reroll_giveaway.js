import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_reroll_giveaway';
const blockData = {
  message0: '%{BKY_REROLL_GIVEAWAY}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'THEN');
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  return `s4d.manager.reroll(${id}).then(async () => {
${statements}
});`;
};
