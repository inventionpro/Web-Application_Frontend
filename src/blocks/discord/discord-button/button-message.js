import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jose_jg_buttons_s4d_button_message';

const blockData = {
  message0: 'button message',
  colour: '#187795',
  output: 'Message',
  tooltip: 'The message of the button.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['i.message', JavaScript.ORDER_NONE];
  return code;
};
