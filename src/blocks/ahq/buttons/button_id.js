import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'id_btn_ahq';

const blockData = {
  message0: 'button id',
  colour: '#33cc00',
  output: 'String',
  tooltip: 'The ID of the button that was pressed.',
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
