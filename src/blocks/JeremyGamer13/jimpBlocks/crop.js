import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_crop';

const blockData = {
  message0: 'Crop Image:%1 X: %2 Y: %3 Width %4 Height %5',
  args0: [
    {
      type: 'input_dummy'
      // only exists to push the other part of the block down, xD
    },
    {
      type: 'input_value',
      name: 'X',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'Y',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'Width',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'Height',
      check: ['Number', 'var', 'Env']
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Crop the image at a specific point and using a Width and Height. Can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const xpos = JavaScript.valueToCode(block, 'X', JavaScript.ORDER_ATOMIC);
  const ypos = JavaScript.valueToCode(block, 'Y', JavaScript.ORDER_ATOMIC);
  const wide = JavaScript.valueToCode(block, 'Width', JavaScript.ORDER_ATOMIC);
  const high = JavaScript.valueToCode(block, 'Height', JavaScript.ORDER_ATOMIC);
  return `await image.crop( Number(` + xpos + `), Number(` + ypos + `), Number(` + wide + `), Number(` + high + `))\n`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
