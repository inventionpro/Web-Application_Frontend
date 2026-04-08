import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 's4d_leaving_guild';
const blockData = {
  message0: '%{BKY_LEAVING_GUILD}',
  colour: '#D85E47',
  output: Types.Server,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4d.leavingMember.guild', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MEMBER_LEAVE',
    types: ['s4d_on_member_leave']
  }
]);
