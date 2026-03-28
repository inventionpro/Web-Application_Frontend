import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_ban_member';
const blockData = {
  message0: '%{BKY_BAN_MEMBER}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    },
    {
      type: 'input_value',
      name: 'STRING',
      check: Types.String
    }
  ],
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const memberr = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  let member = memberr.replace('.user', '');
  const reason = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  if (reason === null) {
    return `${member}.ban();`;
  } else {
    return `${member}.ban({ reason: ${reason} });`;
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_BAN_MEMBER_MISSING_MEMBER',
    types: ['MEMBER']
  }
]);
