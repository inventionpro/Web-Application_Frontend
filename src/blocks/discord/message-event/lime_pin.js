import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'lime_s4d_pin';
const blockData = {
  type: 'lime_s4d_pin',
  message0: '%1 message %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'choise',
      options: [
        ['pin', 'PIN'],
        ['unpin', 'UNPIN']
      ]
    },
    {
      type: 'input_value',
      name: 'value',
      check: Types.Message
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['lime_s4d_pin'] = (block) => {
  var dropdown = block.getFieldValue('choise');
  var value = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_ATOMIC);
  if (value === '') value = 's4dmessage';
  return `${value}.${dropdown === 'PIN' ? '' : 'un'}pin();`;
};
