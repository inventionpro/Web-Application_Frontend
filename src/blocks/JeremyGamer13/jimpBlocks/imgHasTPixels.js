import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_jimp_tpixels';
const blockData = {
  message0: 'Image has alpha pixels?',
  args0: [],
  colour: 260,
  output: Types.Boolean,
  tooltip: 'Returns true if the image has pixels that are see through.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`image.hasAlpha() === true`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
