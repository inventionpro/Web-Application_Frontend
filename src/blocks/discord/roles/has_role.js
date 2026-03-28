import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_has_role';
const blockData = {
  message0: '%{BKY_HAS_ROLE}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: Types.Role
    },
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    }
  ],
  output: Types.Boolean,
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
  return [`${member}._roles.includes(${role}.id)`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_HAS_ROLE_MISSING_ROLE',
    types: ['ROLE']
  },
  {
    type: 'notempty',
    message: 'RES_HAS_ROLE_MISSING_MEMBER',
    types: ['MEMBER']
  }
]);
