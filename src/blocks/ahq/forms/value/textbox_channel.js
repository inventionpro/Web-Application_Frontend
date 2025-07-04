import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'channel_form_ahq';

const blockData = {
  message0: 'Form Channel',
  colour: '#33cc00',
  output: 'Channel',
  tooltip: 'The channel of the clicked form.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = ['i.channel', JavaScript.ORDER_NONE];
  return code;
};
