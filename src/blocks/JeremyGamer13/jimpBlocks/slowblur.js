import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_sblur';

const blockData = {
  message0: 'True blur %1 pixels',
  args0: [
    {
      type: 'input_value',
      name: 'blur',
      check: ['Number', 'var', 'Env']
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

JavaScript[blockName] = function (block) {
  const blur = JavaScript.valueToCode(block, 'blur', JavaScript.ORDER_ATOMIC);
  return `await image.gaussian( Number(` + blur + `) )\n`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
