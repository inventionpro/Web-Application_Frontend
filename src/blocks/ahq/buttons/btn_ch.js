import * as Blockly from 'blockly/core';

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
Blockly.JavaScript[blockName] = function () {
  const code = ['(i.channel)', Blockly.JavaScript.ORDER_NONE];
  return code;
};
