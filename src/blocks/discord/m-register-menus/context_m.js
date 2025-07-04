import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'register_c_m';

const blockData = {
  message0: 'name %1 type %2 server id %3 ',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['String']
    },
    {
      type: 'field_dropdown',
      name: 'SEARCH',
      options: [
        ['message', '3'],
        ['user', '2']
      ]
    },
    {
      type: 'input_value',
      name: 'ID',
      check: ['String']
    }
  ],
  colour: '#40BF4A',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const searchType = block.getFieldValue('SEARCH');
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const id = JavaScript.valueToCode(block, 'id', JavaScript.ORDER_ATOMIC);
  const code = `await s4d.client.guilds.cache.get(${id})?.commands.create({ \n name: ${name}, \n type: ${searchType} \n }) \n`;
  return code;
};
