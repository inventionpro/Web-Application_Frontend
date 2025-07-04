import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_width';

const blockData = {
  message0: 'Width of image',
  args0: [],
  colour: 260,
  output: 'Number',
  tooltip: 'Returns the width of the image.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`image.bitmap.width`, JavaScript.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
