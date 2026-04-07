import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_grayscale';
const blockData = {
  message0: 'Grayscale Effect',
  args0: [],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Adds a grayscale effect to the image.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return `await image.greyscale();`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
