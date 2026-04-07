import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { T, Types } from '../../types.js';

const blockName = 'jg_jimp_getpixel';
const blockData = {
  message0: 'Get pixel:%1 X: %2 Y: %3',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'x',
      check: Types.Number
    },
    {
      type: 'input_value',
      name: 'y',
      check: Types.Number
    }
  ],
  colour: 260,
  output: T(Types.String, Types.Color),
  tooltip: 'Get a certain pixel in the image and output its color. The color outputs as RGBA (ex: 0xFFFFFFFF) and the position can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const xpos = javascriptGenerator.valueToCode(block, 'x', javascriptGenerator.ORDER_ATOMIC);
  const ypos = javascriptGenerator.valueToCode(block, 'y', javascriptGenerator.ORDER_ATOMIC);
  return [`image.getPixelColor(${xpos}, ${ypos})`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
