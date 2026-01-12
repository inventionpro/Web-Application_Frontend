import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = function () {
  const code = ['(i.guild)', javascriptGenerator.ORDER_NONE];
  return code;
};
