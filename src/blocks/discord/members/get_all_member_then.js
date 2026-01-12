import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_get_all';

const blockData = {
  message0: 'in server %1 get all members then for each %2 do %3',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#187795',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  let code = `${server}.members.cache.forEach(async m =>{
         ${statementThen} 
        })
        `;
  return code;
};
