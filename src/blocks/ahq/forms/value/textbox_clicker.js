import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'clkr_form_ahq';
const blockData = {
  message0: 'Form Clicker',
  colour: '#33cc00',
  output: Types.Member,
  tooltip: 'The member who clicked the form.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.member.user', javascriptGenerator.ORDER_NONE];
};
