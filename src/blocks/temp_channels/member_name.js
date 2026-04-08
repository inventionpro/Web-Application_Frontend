import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'temp_member_name';
const blockData = {
  message0: 'name of channel creator',
  colour: '#40BF4A',
  args0: [],
  tooltip: null,
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`s4dmember.user.username`, javascriptGenerator.ORDER_NONE];
};
