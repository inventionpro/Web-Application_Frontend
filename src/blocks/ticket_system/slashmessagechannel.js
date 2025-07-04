import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = [`interaction.channel`, JavaScript.ORDER_NONE];
  return code;
};
