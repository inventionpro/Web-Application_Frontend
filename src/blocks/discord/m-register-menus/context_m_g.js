import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'register_c_m_g';

const blockData = {
  message0: 'name %1 type %2',
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
  const code = `s4d.client.application?.commands.create({ \n name: ${name}, \n type: ${searchType} \n }) \n`;
  return code;
};
