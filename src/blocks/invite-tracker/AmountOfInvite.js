import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'Amount';

const blockData = {
  message0: 'Amount of Invite of Inviter',
  colour: '#187795',
  output: 'Number',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['uses', javascriptGenerator.ORDER_NONE];
  return code;
};
