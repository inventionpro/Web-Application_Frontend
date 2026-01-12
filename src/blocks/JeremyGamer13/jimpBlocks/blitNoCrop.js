import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_blit';

const blockData = {
  message0: 'Blit image %1 at point X: %2 Y: %3',
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
  return (
    `var JimpImage2 = await jimp.read(String(` +
    img +
    `));
    await image.blit( JimpImage2, Number(` +
    xpos +
    `), Number(` +
    ypos +
    `))\n`
  );
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
