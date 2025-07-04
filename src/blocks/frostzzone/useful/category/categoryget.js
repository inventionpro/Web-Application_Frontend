import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'frost_category_get';

const blockData = {
  message0: 'Get category/channel with %2 equal to %1 on server %3',
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
        ['%{BKY_NAME}', 'NAME'],
        ['id', 'ID']
      ]
    },
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
    }
  ],
  colour: '#a55b80',
  output: ['Category', 'Channel'],
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
  if (server.length < 1) {
    if (searchType === 'NAME') {
      return [`s4d.client.channels.cache.find((category) => category.name === ${value})`, JavaScript.ORDER_ATOMIC];
    } else {
      return [`s4d.client.channels.cache.get(${value})`, JavaScript.ORDER_ATOMIC];
    }
  } else {
    if (searchType === 'NAME') {
      return [`${server}.channels.cache.find((category) => category.name === ${value})`, JavaScript.ORDER_ATOMIC];
    } else {
      return [`${server}.channels.cache.get(${value})`, JavaScript.ORDER_ATOMIC];
    }
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CHANNEL_VALUE',
    types: ['VALUE']
  }
]);
