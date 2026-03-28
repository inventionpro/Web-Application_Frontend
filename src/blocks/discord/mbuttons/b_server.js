import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'button_guild';
const blockData = {
  message0: '%{BKY_B_GUILD}',
  colour: '#D85E47',
  output: Types.Server,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.guild', javascriptGenerator.ORDER_NONE];
};
