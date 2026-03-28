import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'prefix_ahq_hndler';
const blockData = {
  message0: 'bot prefix (handler)',
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
  return ['ahqhandler["prefix"]', javascriptGenerator.ORDER_NONE];
};
