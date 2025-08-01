import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_get_member2';

const blockData = {
  message0: 'Get member with %2 equal to %1',
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
  if (searchType === 'USERNAME') {
    return [`s4d.client.users.cache.find((m) => m.username === ${value})`, JavaScript.ORDER_NONE];
  } else {
    return [`s4d.client.users.cache.find((m) => m.id === ${value})`, JavaScript.ORDER_NONE];
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_GET_MEMBER_VALUE',
    types: ['VALUE']
  }
]);
