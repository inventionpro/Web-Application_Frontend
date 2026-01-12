import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'monaco_created_guild';

const blockData = {
  type: 'monaco_created_guild',
  message0: 'created server',
  colour: '#4C97FF',
  output: 'Server',
  inputsInline: true,
  tooltip: 'Get the created guild.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_created_guild'] = function () {
  var code = `newServer`;
  return [code, javascriptGenerator.ORDER_NONE];
};
