import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'role_name';
const blockData = {
  message0: 'Edit role name %1 New name %2',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      check: Types.Role
    },
    {
      type: 'input_value',
      name: 'name',
      check: Types.String
    }
  ],
  colour: '#48a4f0',
  tooltip: 'Change role name',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const role = javascriptGenerator.valueToCode(block, 'role', javascriptGenerator.ORDER_ATOMIC);
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  return `${role}.edit({
  name: ${name}
});`;
};
