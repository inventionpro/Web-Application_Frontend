import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { T, Types } from '../../../types.js';

const blockName = 'dash_v';
const blockData = {
  message0: 'Value',
  colour: '#0EB22B',
  tooltip: 'Value',
  helpUrl: 'Server',
  output: T(Types.String, Types.Boolean, Types.Color)
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['value', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'blockexists',
    message: 'RES_MISSING_AHQ_DASH_C_CONTENT',
    types: ['add_boolean_dash', 'add_color_dash', 'add_text_dash']
  }
]);
