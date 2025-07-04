import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'fz_role_info_color';

const blockData = {
  message0: 'Color of role %1',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  output: 'Color',
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const role = JavaScript.valueToCode(block, 'ROLE', JavaScript.ORDER_ATOMIC);
  const code = [`${role}.color`, JavaScript.ORDER_NONE];
  return code;
};
