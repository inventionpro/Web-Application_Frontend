import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'role_color';

const blockData = {
  message0: 'Edit role color  %1 %2 New color %3',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      Check: 'Role'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'color',
      check: ['String', 'Colour']
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#48a4f0',
  tooltip: 'Change a role color',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  const color = JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC);
  const code = `${role}.edit({
            color: ${color}
        });`;
  return code;
};
