import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'interaction_name';

const blockData = {
  message0: '%{BKY_S_NAME}',
  colour: '#5BA58C',
  tooltip: '',
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['interaction.commandName', JavaScript.ORDER_NONE];
  return code;
};
