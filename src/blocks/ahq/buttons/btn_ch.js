import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'id_btn_ch';
const blockData = {
  message0: 'button channel',
  colour: '#33cc00',
  output: Types.Channel,
  tooltip: 'The channel of the button message.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.channel', javascriptGenerator.ORDER_NONE];
};
