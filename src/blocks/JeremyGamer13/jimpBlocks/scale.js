import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_scale';

const blockData = {
  message0: 'Scale Image:%1 Scale %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'Scale',
      check: ['Number', 'var', 'Env']
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Scale the image by a number factor. Can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const scale = javascriptGenerator.valueToCode(block, 'Scale', javascriptGenerator.ORDER_ATOMIC);
  return `await image.scale( Number(` + scale + `) )\n`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
