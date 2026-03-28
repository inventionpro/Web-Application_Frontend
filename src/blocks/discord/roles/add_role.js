import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { T, Types } from '../../types.js';

const blockName = 's4d_add_role';
const blockData = {
  message0: '%{BKY_ADD_ROLE}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: T(Types.String, Types.Role)
    },
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  const memberr = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  let member = memberr.replace('.user', '');
  if (block.getInput('ROLE').connection.targetConnection) {
    const roleType = block.getInput('ROLE').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] ?? null;
    if (roleType === Types.String[0]) return `${member}.roles.add(${member}.guild.roles.cache.find((role) => role.id === ${role} || role.name === ${role} || '@'+role.name === ${role}));`;
  }
  return `${member}.roles.add(${role});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_ADD_ROLE_MISSING_ROLE',
    types: ['ROLE']
  },
  {
    type: 'notempty',
    message: 'RES_ADD_ROLE_MISSING_MEMBER',
    types: ['MEMBER']
  }
]);
