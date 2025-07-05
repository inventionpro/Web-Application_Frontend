import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'role_name';

const blockData = {
  message0: 'Edit role name %1 New name %2',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      Check: 'Role'
    },
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  const role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const code = `${role}.edit({
            name: ${name}
        });`;
  return code;
};
