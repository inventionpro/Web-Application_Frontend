import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'prefix_ahq_hndler';

const blockData = {
  message0: 'bot prefix (handler)',
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
  const code = ['(ahqhandler[`prefix`])', JavaScript.ORDER_NONE];
  return code;
};
