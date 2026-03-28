import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_react_member';
const blockData = {
  message0: '%{BKY_REACT_MEMBER}',
  colour: '#187795',
  output: Types.Member
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['user', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_REACT',
    types: ['s4d_on_react_added', 's4d_on_react_removed']
  }
]);
