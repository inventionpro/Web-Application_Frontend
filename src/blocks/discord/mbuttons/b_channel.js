import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'button_channel';

const blockData = {
  message0: '%{BKY_B_CHANNEL}',
  colour: '#a55b80',
  output: 'Channel',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['interaction.channel', JavaScript.ORDER_NONE];
  return code;
};
