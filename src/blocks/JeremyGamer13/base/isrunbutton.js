import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_rbs_isRunButton';
const blockData = {
  message0: 'bot is on run button?',
  args0: [],
  colour: '#4C97FF',
  output: Types.Boolean,
  tooltip: 'Returns true if the bot is being ran on the Run Button.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`S4D_APP_RUN_BUTTON`, javascriptGenerator.ORDER_NONE];
};
