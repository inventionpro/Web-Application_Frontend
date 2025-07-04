import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = ['uses', JavaScript.ORDER_NONE];
  return code;
};
