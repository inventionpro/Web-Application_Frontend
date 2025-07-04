import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const role = JavaScript.valueToCode(block, 'ROLE', JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  const code = [`${role}.${type}`, JavaScript.ORDER_NONE];
  return code;
};
