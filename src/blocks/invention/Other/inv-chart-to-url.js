import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'inv_chart_to_url';

const blockData = {
  message0: 'chart url',
  output: null,
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
  var code = `chart.toURL()`;

  return [code, javascriptGenerator.ORDER_NONE];
};
