import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'is_a_number_or_string';
const blockData = {
  message0: '%1 is a %2',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: Types.Any
    },
    {
      type: 'field_dropdown',
      name: 'DATA_TYPE',
      options: [
        ['string', 'STRING'],
        ['number', 'NUMBER'],
        ['boolean', 'boolean'],
        ['object', 'object'],
        ['function', 'function'],
        ['undefined', 'undefined']
      ]
    }
  ],
  output: Types.Boolean,
  colour: '#D14081',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const dataType = block.getFieldValue('DATA_TYPE');
  const code = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  return [`typeof (${code}) == "${dataType.toLowerCase()}"`, javascriptGenerator.ORDER_NONE];
};
