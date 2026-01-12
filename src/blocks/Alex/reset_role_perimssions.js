import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'reset_role_perms';

const blockData = {
  message0: 'Reset all permissions of role %1',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      check: 'Role'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: 'This will remove all permissions from a role.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const role = javascriptGenerator.valueToCode(block, 'role', javascriptGenerator.ORDER_ATOMIC);
  const code = `${role}.setPermissions(0n)
`;
  return code;
};
