import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'owner_n_ahq_hndler';
const blockData = {
  message0: 'Not Owner Message',
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
  return ['ahqhandler["not-owner"]', javascriptGenerator.ORDER_NONE];
};
