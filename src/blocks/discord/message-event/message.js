import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'Message';
const blockData = {
  message0: 'message',
  colour: '#a55b80',
  output: Types.Message,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage', javascriptGenerator.ORDER_NONE];
};
