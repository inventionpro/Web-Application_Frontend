import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'fz_role_info_bool';

const blockData = {
  message0: 'Role %2 is %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['Hoisted', 'hoisted'],
        ['Manageable by bot', 'managed'],
        ['Mentionable', 'mentionable']
      ]
    },
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  output: 'Boolean',
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  const code = [`${role}.${type}`, javascriptGenerator.ORDER_NONE];
  return code;
};
