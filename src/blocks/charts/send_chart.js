import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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
  // TODO: Assemble JavaScript into code variable.
  var code = `{files: [{attachment: chart.toURL(), name: 'chart.png'}],}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.ORDER_NONE];
};
