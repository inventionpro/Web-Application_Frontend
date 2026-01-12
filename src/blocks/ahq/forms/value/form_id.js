import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'id_form_ahq';

const blockData = {
  message0: 'Form Id',
  colour: '#33cc00',
  output: 'String',
  tooltip: 'The ID of the clicked form.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = ['(i.customId)', javascriptGenerator.ORDER_NONE];
  return code;
};
