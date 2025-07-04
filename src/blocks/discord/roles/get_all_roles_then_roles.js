import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_get_all_role_role';

const blockData = {
  message0: '%{BKY_GET_ALL_ROLE_ROLE}',
  args0: [],
  colour: '#2EB66B',
  output: 'Role',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return [`ro`, JavaScript.ORDER_NONE];
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_ALL_ROLES_PARENT',
    types: ['s4d_get_all_role']
  }
]);
