import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'member_color';
const blockData = {
  message0: 'Color of member %1',
  args0: [
    {
      type: 'input_value',
      check: Types.Member,
      name: 'member',
      text: ''
    }
  ],
  output: T(Types.Color, Types.String),
  colour: '#57a0d9',
  tooltip: 'Gets the color that the member appears as in the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC);
  return [`${member}.displayHexColor`, javascriptGenerator.ORDER_NONE];
};
