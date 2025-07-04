import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'fz_role_info';

const blockData = {
  message0: '%1 of emoji %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['Name', 'name'],
        ['ID', 'id'],
        ['Server ID', 'guildId'],
        ['Image Url', 'url']
      ]
    },
    {
      type: 'input_value',
      name: 'EMOJI',
      check: 'Emoji'
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
  const emoji = JavaScript.valueToCode(block, 'EMOJI', JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  const code = [`${emoji}.${type}`, JavaScript.ORDER_NONE];
  return code;
};
