import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'm_guild';

const blockData = {
  message0: 'context server',
  colour: '#D85E47',
  output: 'Server',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['interaction.guild', javascriptGenerator.ORDER_NONE];
  return code;
};
