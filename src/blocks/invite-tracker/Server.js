import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'Server';
const blockData = {
  message0: 'Server',
  colour: '#187795',
  output: Types.Server,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['member.guild', javascriptGenerator.ORDER_NONE];
};
