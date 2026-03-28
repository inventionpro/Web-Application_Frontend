import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'delete_member_cooldown';
const blockData = {
  message0: 'delete member cooldown %1',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    }
  ],
  colour: '#4C97FF',
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
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return `Cooldown.delete(${member}.id);`;
};
