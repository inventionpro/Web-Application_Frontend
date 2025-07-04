import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'fz_role_info_num';

const blockData = {
  message0: '%1 of role %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['Position', 'rawPosition'],
        ['Created Timestamp', 'createdTimestamp']
      ]
    },
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  output: 'Number',
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
