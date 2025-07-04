import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'dash_v';

const blockData = {
  message0: 'Value',
  colour: '#0EB22B',
  tooltip: 'Value',
  helpUrl: 'Server',
  output: ['String', 'Colour', 'Boolean']
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = [`value`, JavaScript.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'blockexists',
    message: 'RES_MISSING_AHQ_DASH_C_CONTENT',
    types: ['add_boolean_dash', 'add_color_dash', 'add_text_dash']
  }
]);
