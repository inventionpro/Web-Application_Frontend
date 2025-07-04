import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'server_form_ahq';

const blockData = {
  message0: 'Form Server',
  colour: '#33cc00',
  output: 'Server',
  tooltip: 'The server the form was in.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = ['(i.guild)', JavaScript.ORDER_NONE];
  return code;
};
