import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'invite_code';

const blockData = {
  message0: 'together invite code',
  colour: '#40BF4A',
  args0: [],
  tooltip: null,
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`invite.code`, JavaScript.ORDER_NONE];
  return code;
};
