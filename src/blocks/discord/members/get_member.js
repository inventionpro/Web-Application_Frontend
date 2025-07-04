import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_get_member';

const blockData = {
  message0: '%{BKY_GET_MEMBER}',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: 'String'
    },
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['%{BKY_USERNAME}', 'USERNAME'],
        ['id', 'ID']
      ]
    },
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
    }
  ],
  colour: '#187795',
  output: 'Member',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  const searchType = block.getFieldValue('SEARCH_TYPE');
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  if (searchType === 'USERNAME') {
    return [`${server}.members.cache.find((m) => m.user.username === String(${value}))`, JavaScript.ORDER_NONE];
  } else {
    return [`${server}.members.cache.get(String(${value})) || await ${server}.members.fetch(String(${value}))`, JavaScript.ORDER_NONE];
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_GET_MEMBER_VALUE',
    types: ['VALUE']
  },
  {
    type: 'notempty',
    message: 'RES_GET_MEMBER_SERVER',
    types: ['SERVER']
  }
]);
