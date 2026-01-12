import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'owner_n_ahq_hndler';

const blockData = {
  message0: 'Not Owner Message',
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
  const code = ['(ahqhandler[`not-owner`])', javascriptGenerator.ORDER_NONE];
  return code;
};
