import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'button_channel';
const blockData = {
  message0: '%{BKY_B_CHANNEL}',
  colour: '#a55b80',
  output: Types.Channel,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.channel', javascriptGenerator.ORDER_NONE];
};
