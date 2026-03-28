import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_bot_startup_time';
const blockData = {
  message0: 'bot startup time',
  colour: '#5b67a5',
  tooltip: '',
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['String(s4d.client.readyAt)', javascriptGenerator.ORDER_NONE];
};
