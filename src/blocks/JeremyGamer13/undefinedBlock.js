import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_undefined';

const blockData = {
  message0: 'undefined',
  args0: [],
  output: 'Number',
  colour: '#FF0000',
  tooltip: 'Returns as undefined.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`undefined`, JavaScript.ORDER_NONE];
  return code;
};
