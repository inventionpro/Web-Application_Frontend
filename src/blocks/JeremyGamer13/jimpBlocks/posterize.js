import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_poster';

const blockData = {
  message0: 'Posterize at level %1',
  args0: [
    {
      type: 'input_value',
      name: 'post',
      check: ['Number', 'var', 'Env']
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Posterizes the image at a specific level. Can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const post = javascriptGenerator.valueToCode(block, 'post', javascriptGenerator.ORDER_ATOMIC);
  return (
    `await image.posterize( Number(` +
    post +
    `) )
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
