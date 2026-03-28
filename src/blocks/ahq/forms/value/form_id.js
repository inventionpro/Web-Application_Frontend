import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'id_form_ahq';
const blockData = {
  message0: 'Form Id',
  colour: '#33cc00',
  output: Types.String,
  tooltip: 'The ID of the clicked form.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['(i.customId)', javascriptGenerator.ORDER_NONE];
};
