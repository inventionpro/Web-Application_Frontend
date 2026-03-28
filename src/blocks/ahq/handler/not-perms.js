import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'not_perms_ahq_hndler';
const blockData = {
  message0: 'Not MOD Perms Message',
  colour: '#33cc00',
  output: Types.String,
  tooltip: '???',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['ahqhandler["not-perms"]', javascriptGenerator.ORDER_NONE];
};
