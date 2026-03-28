import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_member_banner';
const blockData = {
  message0: 'Member Banner URL',
  colour: '#187795',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  isHiden: true
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['banner', javascriptGenerator.ORDER_NONE];
};
