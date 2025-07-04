import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'id_btn_ch';

const blockData = {
  message0: 'button channel',
  colour: '#33cc00',
  output: 'Channel',
  tooltip: 'The channel of the button message.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = ['(i.channel)', JavaScript.ORDER_NONE];
  return code;
};
