import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'send_chart';
const blockData = {
  type: 'send_chart',
  message0: 'send chart',
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

javascriptGenerator.forBlock['send_chart'] = function () {
  return [`{files: [{attachment: chart.toURL(), name: 'chart.png'}],}`, javascriptGenerator.ORDER_NONE];
};
