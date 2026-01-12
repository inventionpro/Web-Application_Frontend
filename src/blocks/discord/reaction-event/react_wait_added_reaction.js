import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_reaction_wait_added_reaction';

const blockData = {
  message0: '%{BKY_REACTION_WAIT_ADDED_REACTION}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    },
    {
      type: 'input_value',
      name: 'TIME',
      check: 'Number'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
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
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  const time = javascriptGenerator.valueToCode(block, 'TIME', javascriptGenerator.ORDER_ATOMIC) || 5;
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  let code = `s4dmessage.awaitReactions({(reation,user)=>{user.id === ${member}.id}, time: (${time}*60*1000), max: 1 }).then(async collected => {const s4dreaction = collected.first(); \n ${statementThen} \n});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_REACT_NO_MEMBER',
    types: ['MEMBER']
  }
]);
