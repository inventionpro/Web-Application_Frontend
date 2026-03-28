import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jose_jg_buttons_s4d_button_message';
const blockData = {
  message0: 'button message',
  colour: '#187795',
  output: Types.Message,
  tooltip: 'The message of the button.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.message', javascriptGenerator.ORDER_NONE];
};
