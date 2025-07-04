import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'send_chart';

const blockData = {
  type: 'send_chart',
  message0: 'send chart',
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

JavaScript['send_chart'] = function () {
  var code = `{files: [{attachment: chart.toURL(), name: 'chart.png'}],}`;
  return [code, JavaScript.ORDER_NONE];
};
