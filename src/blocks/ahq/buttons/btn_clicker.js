import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'id_btn_clkr';

const blockData = {
  message0: 'button member',
  colour: '#33cc00',
  output: 'Member',
  tooltip: 'The member who clicked the button.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = ['(i.member.user)', javascriptGenerator.ORDER_NONE];
  return code;
};
