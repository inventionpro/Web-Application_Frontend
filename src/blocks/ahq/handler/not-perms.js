import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'not_perms_ahq_hndler';

const blockData = {
  message0: 'Not MOD Perms Message',
  colour: '#33cc00',
  output: 'String',
  tooltip: '???',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = ['(ahqhandler[`not-perms`])', javascriptGenerator.ORDER_NONE];
  return code;
};
