import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'role_color';

const blockData = {
  message0: 'Edit role color  %1 New color %2',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      Check: 'Role'
    },
    {
      type: 'input_value',
      name: 'color',
      check: ['String', 'Colour']
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

JavaScript[blockName] = function (block) {
  const role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  const color = JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC);
  const code = `${role}.edit({
            color: ${color}
        });`;
  return code;
};
