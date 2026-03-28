import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'id_btn_ahq';
const blockData = {
  message0: 'button id',
  colour: '#33cc00',
  output: Types.String,
  tooltip: 'The ID of the button that was pressed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.customId', javascriptGenerator.ORDER_NONE];
};
