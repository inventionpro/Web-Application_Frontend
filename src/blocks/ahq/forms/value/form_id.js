import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
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
JavaScript[blockName] = function () {
  const code = ['(i.customId)', JavaScript.ORDER_NONE];
  return code;
};
