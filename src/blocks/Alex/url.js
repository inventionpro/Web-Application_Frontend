import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'url_image';
const blockData = {
  message0: 'Image URL',
  name: 'url',
  output: Types.String,
  colour: '#05a386',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`await image_finder.find(query)`, javascriptGenerator.ORDER_NONE];
};
