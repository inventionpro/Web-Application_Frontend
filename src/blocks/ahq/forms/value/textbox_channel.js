import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'channel_form_ahq';
const blockData = {
  message0: 'Form Channel',
  colour: '#33cc00',
  output: Types.Channel,
  tooltip: 'The channel of the clicked form.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.channel', javascriptGenerator.ORDER_NONE];
};
