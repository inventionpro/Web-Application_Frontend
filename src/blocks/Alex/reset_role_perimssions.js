import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  const code = `${role}.setPermissions(0n)
`;
  return code;
};
