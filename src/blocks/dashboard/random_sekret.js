import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'random_sekret';

const blockData = {
  type: 'random_sekret',
  message0: 'Generate a random secret',
  output: null,
  colour: 260,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['random_sekret'] = function () {
  var code = `([Math.floor(new Date().getTime() / 1000), 'e', Math.floor(Math.random() * 83490)].join(''))`;
  return [code, javascriptGenerator.ORDER_NONE];
};
