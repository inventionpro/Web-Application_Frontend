import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_set_member_nickname';

const blockData = {
  message0: '%{BKY_SET_MEMBER_NICKNAME}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    },
    {
      type: 'input_value',
      name: 'NEW_NICKNAME',
      check: ['Number', 'String']
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
  const newName = javascriptGenerator.valueToCode(block, 'NEW_NICKNAME', javascriptGenerator.ORDER_ATOMIC);
  const code = `${member}.setNickname(${newName});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_SET_MEMBER_NICKNAME_MEMBER',
    types: ['MEMBER']
  },
  {
    type: 'notempty',
    message: 'RES_SET_MEMBER_NICKNAME_NEW_NAME',
    types: ['NEW_NICKNAME']
  }
]);
