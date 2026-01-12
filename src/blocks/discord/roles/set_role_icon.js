import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock['set_role_icon'] = (block) => {
  var icon = javascriptGenerator.valueToCode(block, 'icon', javascriptGenerator.ORDER_ATOMIC);
  var role = javascriptGenerator.valueToCode(block, 'role', javascriptGenerator.ORDER_ATOMIC);
  var code = `${role}.setIcon(${icon});\n`;
  return code;
};
