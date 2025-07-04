import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'get_all_roles';

const blockData = {
  message0: 'Get all roles of member %1 in server %2 then %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Member'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'then',
      align: 'RIGHT'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#56afdb',
  tooltip: 'Get all of the roles a member has in a server and run the blocks below.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const Then = JavaScript.statementToCode(block, 'then');
  const member = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const code = `memberRoles = ${member}.roles.cache
.filter((roles) => roles.id !== ${server}.id)
.map ((role) => role.toString()); \n ${Then}`;
  return code;
};
