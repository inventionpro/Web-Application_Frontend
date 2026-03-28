import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'register_c_m_g';
const blockData = {
  message0: 'name %1 type %2',
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
  return `s4d.client.application?.commands.create({
  name: ${name},
  type: ${searchType}
});`;
};
