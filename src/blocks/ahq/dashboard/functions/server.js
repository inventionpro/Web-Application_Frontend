import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'dash_g';

const blockData = {
  message0: 'server',
  colour: '#0EB22B',
  tooltip: 'Server',
  helpUrl: '',
  output: 'Server'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = [`guild`, javascriptGenerator.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'blockexists',
    message: 'RES_MISSING_AHQ_DASH_C_CONTENT',
    types: ['add_boolean_dash', 'add_color_dash', 'add_text_dash']
  }
]);
