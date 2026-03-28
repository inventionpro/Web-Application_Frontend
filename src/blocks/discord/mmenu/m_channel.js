import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'm_channel';
const blockData = {
  message0: 'context channnel',
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
