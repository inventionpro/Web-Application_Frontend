import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'slash_message_channel';

const blockData = {
  message0: '[Slash] Message channel',
  colour: '#d14081',
  args0: [],
  tooltip: null,
  output: 'Channel',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`interaction.channel`, javascriptGenerator.ORDER_NONE];
  return code;
};
