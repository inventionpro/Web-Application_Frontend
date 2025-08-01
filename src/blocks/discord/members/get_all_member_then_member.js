import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_get_all_member';

const blockData = {
  message0: '%{BKY_GET_ALL_MEMBER}',
  args0: [],
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

JavaScript[blockName] = function () {
  return [`m`, JavaScript.ORDER_NONE];
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_ALL_MEMBER_PARENT',
    types: ['s4d_get_all']
  }
]);
