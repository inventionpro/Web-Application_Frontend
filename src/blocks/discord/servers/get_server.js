import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_get_server';

const blockData = {
  message0: '%{BKY_GET_SERVER}',
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
    }
  ],
  colour: '#D85E47',
  output: 'Server',
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
  if (searchType === 'NAME') {
    return [`s4d.client.guilds.cache.find((guild) => guild.name === ${value})`, JavaScript.ORDER_NONE];
  } else {
    return [`s4d.client.guilds.cache.get(${value})`, JavaScript.ORDER_NONE];
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_GET_SERVER_VALUE',
    types: ['VALUE']
  }
]);
