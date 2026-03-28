import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'server_form_ahq';
const blockData = {
  message0: 'Form Server',
  colour: '#33cc00',
  output: Types.Server,
  tooltip: 'The server the form was in.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['(i.guild)', javascriptGenerator.ORDER_NONE];
};
