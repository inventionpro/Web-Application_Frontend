import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 'github_get_then';
const blockData = {
  message0: 'Get Users %1 github %2 then - %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'field_dropdown',
      name: 'what',
      options: [['Profile', '']]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#5ba58b',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const user = javascriptGenerator.valueToCode(block, 'USER', javascriptGenerator.ORDER_ATOMIC);
  const what = javascriptGenerator.valueToCode(block, 'what', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  return `fetch('https://api.github.com/users/' + ${user} + '/' + ${what})
  .then(res=>res.json())
  .then(async data => {
${statementThen}
  })
  .catch(async err => {
    console.log("Error: " + err.message);
  });`;
};
