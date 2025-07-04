import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_rbs_isRunButton';

const blockData = {
  message0: 'bot is on run button?',
  args0: [],
  colour: '#4C97FF',
  output: 'Boolean',
  tooltip: 'Returns true if the bot is being ran on the Run Button.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`S4D_APP_RUN_BUTTON`, JavaScript.ORDER_NONE];
  return code;
};
