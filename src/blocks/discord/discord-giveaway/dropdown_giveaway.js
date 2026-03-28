import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_dd_giveaway';
const blockData = {
  message0: '%4 giveaway id %1 then %2 %3',
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
    },
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['reroll', 'reroll'],
        ['delete', 'delete'],
        ['end', 'end'],
        ['pause', 'pause'],
        ['unpause', 'unpause']
      ]
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
  const type = block.getFieldValue('TYPE');
  return `s4d.manager.${type}(${id}).then(async () => {
${statements}
});`;
};
