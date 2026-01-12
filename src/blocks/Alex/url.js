import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'url_image';

const blockData = {
  message0: 'Image URL',
  name: 'url',
  output: ['String'],
  colour: '#05a386',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`await image_finder.find(query)`, javascriptGenerator.ORDER_NONE];
  return code;
};
