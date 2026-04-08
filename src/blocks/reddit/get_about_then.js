import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'get_about_then';
const blockData = {
  message0: "Get User %1 Reddit's data then %2 %3",
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: Types.String
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
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  return `fetch('https://www.reddit.com/user/' + ${user} + '/about.json')
  .then(res=>res.json())
  .then(info=>{
    ${statementThen}
  });`;
};
