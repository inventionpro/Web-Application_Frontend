import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'set_role_icon';

const blockData = {
  type: 'set_role_icon',
  message0: 'set icon %1 on role %2',
  args0: [
    {
      type: 'input_value',
      name: 'icon'
    },
    {
      type: 'input_value',
      name: 'role',
      Check: 'Role'
    }
  ],
  inputsInline: true,
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

JavaScript['set_role_icon'] = function (block) {
  var icon = JavaScript.valueToCode(block, 'icon', JavaScript.ORDER_ATOMIC);
  var role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  var code = `${role}.setIcon(${icon});\n`;
  return code;
};
