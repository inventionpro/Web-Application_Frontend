import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';

const blockName = 's4d_includes';

const blockData = {
  message0: '%{BKY_INCLUDES}',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'INCLUDES',
      check: 'String'
    }
  ],
  output: 'Boolean',
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_ATOMIC);
  const includes = JavaScript.valueToCode(block, 'INCLUDES', JavaScript.ORDER_ATOMIC);
  const code = [`String(${text}).includes(String(${includes}))`, JavaScript.ORDER_NONE];

  return code;
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
