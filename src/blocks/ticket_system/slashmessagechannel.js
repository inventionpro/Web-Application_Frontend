import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'slash_message_channel';
const blockData = {
  message0: '[Slash] Message channel',
  colour: '#d14081',
  args0: [],
  tooltip: null,
  output: Types.Channel,
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
