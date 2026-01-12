import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 's4d_get_rndm';

const blockData = {
  message0: 'Get all member in server %1 then %2',
  args0: [
    {
      type: 'input_value',
      name: 'Server',
      check: 'Server'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#40BF4A',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  const server = javascriptGenerator.valueToCode(block, 'Server', javascriptGenerator.ORDER_ATOMIC);
  //i shall try tomorrow as its 11PM here
  const code = `let usersCollection = ${server}.members.cache;
    let randomUser = usersCollection.random();
    ${statementThen}`;
  return code;
};
