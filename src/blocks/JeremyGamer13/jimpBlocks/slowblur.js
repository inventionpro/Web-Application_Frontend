import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_jimp_sblur';
const blockData = {
  message0: 'True blur %1 pixels',
  args0: [
    {
      type: 'input_value',
      name: 'blur',
      check: Types.Number
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'True blurs the image the specified amount of pixels. Very slow, but it is the true blur that is possible. Can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const blur = javascriptGenerator.valueToCode(block, 'blur', javascriptGenerator.ORDER_ATOMIC);
  return `await image.gaussian(Number(${blur}));`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
