import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_drawtext';

const blockData = {
  message0: 'Display %1 placed X: %2 Y: %3 using font size %4',
  args0: [
    {
      type: 'input_value',
      name: 'text',
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
      type: 'field_dropdown',
      name: 'fontSize',
      options: [
        ['8', '8'],
        ['10', '10'],
        ['12', '12'],
        ['14', '14'],
        ['16', '16'],
        ['32', '32'],
        ['64', '64'],
        ['128', '128']
      ]
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Adds text onto to the image at a certain point.',
  helpUrl: 'https://www.npmjs.com/package/jimp#writing-text'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const text = JavaScript.valueToCode(block, 'text', JavaScript.ORDER_NONE);
  const xpos = JavaScript.valueToCode(block, 'xpos', JavaScript.ORDER_ATOMIC);
  const ypos = JavaScript.valueToCode(block, 'ypos', JavaScript.ORDER_ATOMIC);
  const fontSize = block.getFieldValue('fontSize');
  return (
    `await jimp.loadFont(jimp.FONT_SANS_` +
    fontSize +
    `_BLACK).then(async font => {
  await image.print(font, Number(` +
    xpos +
    `), Number(` +
    ypos +
    `), String(` +
    text +
    `));
});\n`
  );
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT_GEN',
    types: ['text', 'xpos', 'ypos', 'fontSize']
  },
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
