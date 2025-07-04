import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_setpixel';

const blockData = {
  message0: 'Set pixel:%1 X: %2 Y: %3 Color: %4',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'x',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'y',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'color',
      check: ['Colour', 'String', 'var', 'Env']
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Set a certain pixel in the image to a color. Can only use Numbers, Variables, or Env secrets for position, and color can be a Color, String, Variable, or Env secret.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const color = JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC);
  const xpos = JavaScript.valueToCode(block, 'x', JavaScript.ORDER_ATOMIC);
  const ypos = JavaScript.valueToCode(block, 'y', JavaScript.ORDER_ATOMIC);
  return `await image.setPixelColor(jimp.cssColorToHex(${color}), ${xpos}, ${ypos})
`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
