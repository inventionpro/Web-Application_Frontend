import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'button_id';

const blockData = {
  message0: '%{BKY_B_ID}',
  colour: '#5BA58C',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['interaction.customId', javascriptGenerator.ORDER_NONE];
  return code;
};
