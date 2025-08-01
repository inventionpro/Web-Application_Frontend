import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function () {
  const code = [`await image_finder.find(query)`, JavaScript.ORDER_NONE];
  return code;
};
