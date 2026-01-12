import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 's4d_joining_member';

const blockData = {
  message0: '%{BKY_JOINING_MEMBER}',
  colour: '#187795',
  output: 'Member',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4d.joiningMember.user', javascriptGenerator.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MEMBER_JOIN',
    types: ['s4d_on_member_join']
  }
]);
