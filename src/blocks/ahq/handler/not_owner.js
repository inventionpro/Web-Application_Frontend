import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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
JavaScript[blockName] = function () {
  const code = ['(ahqhandler[`not-owner`])', JavaScript.ORDER_NONE];
  return code;
};
