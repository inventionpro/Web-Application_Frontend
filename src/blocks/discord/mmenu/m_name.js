import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'm_name';
const blockData = {
  message0: 'context name',
  colour: '#5BA58C',
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
  return ['interaction.commandName', javascriptGenerator.ORDER_NONE];
};
