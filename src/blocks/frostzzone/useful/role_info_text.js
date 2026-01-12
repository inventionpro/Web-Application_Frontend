import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'fz_role_info_text';

const blockData = {
  message0: '%1 of role %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['Name', 'name'],
        ['ID', 'id'],
        ['Server ID', 'guild'],
        ['Icon', 'icon'],
        ['Unicode Emoji', 'unicodeEmoji']
      ]
    },
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  output: 'String',
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
