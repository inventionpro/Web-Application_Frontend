import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';
import { Types } from '../types.js';

const blockName = 's4d_includes';
const blockData = {
  message0: '%{BKY_INCLUDES}',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'INCLUDES',
      check: Types.String
    }
  ],
  output: Types.Boolean,
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  const includes = javascriptGenerator.valueToCode(block, 'INCLUDES', javascriptGenerator.ORDER_ATOMIC);
  return [`String(${text}).includes(String(${includes}))`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_INCLUDES_TEXT',
    types: ['TEXT']
  },
  {
    type: 'notempty',
    message: 'RES_INCLUDES_INCLUDES',
    types: ['INCLUDES']
  }
]);
