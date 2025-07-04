import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_mask';

const blockData = {
  message0: 'Mask image %1 at point X: %2 Y: %3',
  inputsInline: true,
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
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Masks an image onto another image using the brightness in the second image. The image can use Strings, Numbers, Variables, and Env secrets, while X and Y cannot use strings.',
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
  return (
    `var JimpImage2 = await jimp.read(String(` +
    img +
    `));
    await image.mask( JimpImage2, Number(` +
    xpos +
    `), Number(` +
    ypos +
    `))
`
  );
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
