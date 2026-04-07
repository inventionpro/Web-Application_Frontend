import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_jimp_brightnesscontrast';
const blockData = {
  message0: 'Change %1 effect on image by %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['brightness', '"brightness"'],
        ['contrast', '"contrast"'],
        ['color', '"color"']
      ]
    },
    {
      type: 'input_value',
      name: 'amount',
      check: Types.Number
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Changes the brightness or contrast on the image by -100 to 100. Color effects change the color by -360 to 360.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('type');
  const amount = javascriptGenerator.valueToCode(block, 'amount', javascriptGenerator.ORDER_ATOMIC);
  if (String(type) === '"brightness"') {
    return `await image.brightness(${amount}/ 100);`;
  } else if (String(type) === '"contrast"') {
    return `await image.contrast(${amount}/100);`;
  } else {
    return `await image.color([
  { apply: 'hue', params: [${amount}] }
]);`;
  }
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
