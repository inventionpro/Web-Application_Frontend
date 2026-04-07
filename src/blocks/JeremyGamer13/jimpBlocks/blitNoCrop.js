import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_jimp_blit';
const blockData = {
  message0: 'Blit image %1 at point X: %2 Y: %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'Image',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'xpos',
      check: Types.Number
    },
    {
      type: 'input_value',
      name: 'ypos',
      check: Types.Number
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Adds another image onto the main image at a specific point. The image can use Strings, Numbers, Variables, and Env secrets, while X and Y cannot use strings.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const img = javascriptGenerator.valueToCode(block, 'Image', javascriptGenerator.ORDER_ATOMIC);
  const xpos = javascriptGenerator.valueToCode(block, 'xpos', javascriptGenerator.ORDER_ATOMIC);
  const ypos = javascriptGenerator.valueToCode(block, 'ypos', javascriptGenerator.ORDER_ATOMIC);
  return `var JimpImage2 = await jimp.read(String(${img}));
await image.blit(JimpImage2, Number(${xpos}), Number(${ypos}));`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
