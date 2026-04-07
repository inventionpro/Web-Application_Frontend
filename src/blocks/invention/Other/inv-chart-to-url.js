import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_chart_to_url';
const blockData = {
  message0: 'chart url',
  output: Types.Any,
  colour: 75,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['inv_chart_to_url'] = function () {
  // this is giving me pain
  return ['chart.toURL()', javascriptGenerator.ORDER_NONE];
};
