import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_get_all_member';
const blockData = {
  message0: '%{BKY_GET_ALL_MEMBER}',
  args0: [],
  colour: '#187795',
  output: Types.Member,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['m', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_ALL_MEMBER_PARENT',
    types: ['s4d_get_all']
  }
]);
