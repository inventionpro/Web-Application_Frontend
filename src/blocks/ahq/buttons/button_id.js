import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = function () {
  const code = ['(i.customId)', javascriptGenerator.ORDER_NONE];
  return code;
};
