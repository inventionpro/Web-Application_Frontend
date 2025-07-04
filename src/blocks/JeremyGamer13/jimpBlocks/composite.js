import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_composite';

const blockData = {
  message0: 'Composite image %1 at point X: %2 Y: %3 using blend mode %6 and the image opacity is %4 with destination opacity of %5',
  inputsInline: false,
  args0: [
    {
      type: 'input_value',
      name: 'Image',
      check: ['String', 'Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'xpos',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'ypos',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'srcOpac',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'destOpac',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'field_dropdown',
      name: 'blendmode',
      options: [
        ['Default', 'jimp.BLEND_SOURCE_OVER'],
        ['Destination Over', 'jimp.BLEND_DESTINATION_OVER'],
        ['Multiply', 'jimp.BLEND_MULTIPLY'],
        ['Add', 'jimp.BLEND_ADD'],
        ['Screen', 'jimp.BLEND_SCREEN'],
        ['Overlay', 'jimp.BLEND_OVERLAY'],
        ['Darken', 'jimp.BLEND_DARKEN'],
        ['Lighten', 'jimp.BLEND_LIGHTEN'],
        ['Hard Light', 'jimp.BLEND_HARDLIGHT'],
        ['Difference', 'jimp.BLEND_DIFFERENCE'],
        ['Exclusion', 'jimp.BLEND_EXCLUSION']
      ]
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Adds another image onto the main image at a specific point and has the option of a blend mode. The image can use Strings, Numbers, Variables, and Env secrets, while the rest cannot use strings.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const img = JavaScript.valueToCode(block, 'Image', JavaScript.ORDER_ATOMIC);
  const xpos = JavaScript.valueToCode(block, 'xpos', JavaScript.ORDER_ATOMIC);
  const ypos = JavaScript.valueToCode(block, 'ypos', JavaScript.ORDER_ATOMIC);
  const srcO = JavaScript.valueToCode(block, 'srcOpac', JavaScript.ORDER_ATOMIC);
  const desO = JavaScript.valueToCode(block, 'destOpac', JavaScript.ORDER_ATOMIC);
  const mode = block.getFieldValue('blendmode');

  return `var JimpImageC = await jimp.read(String(${img}));
    await image.composite( JimpImageC, Number(${xpos}), Number(${ypos}), {
  mode: ${mode},
  opacitySource: Number(${srcO}),
  opacityDest: Number(${desO})
});
`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
