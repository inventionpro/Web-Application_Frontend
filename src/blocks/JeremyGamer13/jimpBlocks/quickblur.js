import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_qblur';

const blockData = {
  message0: 'Quickly Blur %1 pixels',
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
  tooltip: 'Blurs the image the specified amount of pixels. Can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const blur = javascriptGenerator.valueToCode(block, 'blur', javascriptGenerator.ORDER_ATOMIC);
  return `await image.blur( Number(` + blur + `) )\n`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
