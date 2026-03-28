import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_created_at';
const blockData = {
  message0: '%{BKY_CREATED_AT}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    }
  ],
  colour: '#187795',
  output: Types.Date,
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
  // TODO: uh this only on user, temp fix
  return [`${member}.user.createdAt`, javascriptGenerator.ORDER_NONE];
};
