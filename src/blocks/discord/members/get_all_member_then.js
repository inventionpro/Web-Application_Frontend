import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  let code = `${server}.members.cache.forEach(async m =>{
         ${statementThen} 
        })
        `;
  return code;
};
