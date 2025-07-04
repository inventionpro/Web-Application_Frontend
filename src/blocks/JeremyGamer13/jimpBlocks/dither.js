import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_dither';

const blockData = {
  message0: 'Dither Effect',
  args0: [],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Dithers the image and reduces the color space to 16-bits.',
  helpUrl: 'https://www.npmjs.com/package/jimp#methods'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return `await image.dither565()\n`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
