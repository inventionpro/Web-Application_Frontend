import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_pixelate';

const blockData = {
  message0: 'Pixelate Image:%1 Amount: %2 X: %3 Y: %4 Width %5 Height %6',
  args0: [
    {
      type: 'input_dummy'
      // only exists to push the other part of the block down, xD
    },
    {
      type: 'input_value',
      name: 'Size',
      check: ['Number', 'var', 'Env']
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
  const size = JavaScript.valueToCode(block, 'Size', JavaScript.ORDER_ATOMIC);
  const xpos = JavaScript.valueToCode(block, 'X', JavaScript.ORDER_ATOMIC);
  const ypos = JavaScript.valueToCode(block, 'Y', JavaScript.ORDER_ATOMIC);
  const wide = JavaScript.valueToCode(block, 'Width', JavaScript.ORDER_ATOMIC);
  const high = JavaScript.valueToCode(block, 'Height', JavaScript.ORDER_ATOMIC);
  return (
    `await image.pixelate( Number(` +
    size +
    `), Number(` +
    xpos +
    `), Number(` +
    ypos +
    `), Number(` +
    wide +
    `), Number(` +
    high +
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
