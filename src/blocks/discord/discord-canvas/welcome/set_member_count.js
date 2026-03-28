import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

const blockName = 's4d_set_member_count';
const blockData = {
  message0: '%{BKY_SET_MEMBER_COUNT}',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: T(Types.String, Types.Number)
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  return `.setMemberCount(${value})`;
};
