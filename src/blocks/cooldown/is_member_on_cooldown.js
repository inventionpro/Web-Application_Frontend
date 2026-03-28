import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'is_member_on_cooldown';
const blockData = {
  message0: 'is member on cooldown %1',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: Types.Member
    }
  ],
  colour: '#187795',
  output: Types.Boolean,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const user = javascriptGenerator.valueToCode(block, 'USER', javascriptGenerator.ORDER_ATOMIC);
  return [`Cooldown.has(${user}.id)`, javascriptGenerator.ORDER_NONE];
};
