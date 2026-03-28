import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_create_role';
const blockData = {
  message0: '%{BKY_CREATE_ROLE}',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'SERVER',
      check: Types.Server
    },
    {
      type: 'input_value',
      name: 'COLOR',
      check: Types.Color
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const color = javascriptGenerator.valueToCode(block, 'COLOR', javascriptGenerator.ORDER_ATOMIC);
  return `${server}.roles.create({
  name: ${name},
  color: ${color}
});`;
};
