import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'id_btn_clkr';
const blockData = {
  message0: 'button member',
  colour: '#33cc00',
  output: Types.Member,
  tooltip: 'The member who clicked the button.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.member', javascriptGenerator.ORDER_NONE];
};
