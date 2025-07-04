import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 's4d_member_banner';

const blockData = {
  message0: 'Member Banner URL',
  colour: '#187795',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  isHiden: true
};

JavaScript[blockName] = function () {
  const code = ['banner', JavaScript.ORDER_NONE];
  return code;
};
