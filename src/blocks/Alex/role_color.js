import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'role_color';
const blockData = {
  message0: 'Edit role color  %1 New color %2',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      check: Types.Role
    },
    {
      type: 'input_value',
      name: 'color',
      check: T(Types.String, Types.Color)
    }
  ],
  colour: '#48a4f0',
  tooltip: 'Change a role color',
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
  const color = javascriptGenerator.valueToCode(block, 'color', javascriptGenerator.ORDER_ATOMIC);
  return `${role}.edit({
  color: ${color}
});`;
};
