import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'register_c_m';
const blockData = {
  message0: 'name %1 type %2 server id %3 ',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
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
      check: Types.String
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH');
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const id = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
  return `await s4d.client.guilds.cache.get(${id})?.commands.create({
  name: ${name},
  type: ${searchType}
});`;
};
