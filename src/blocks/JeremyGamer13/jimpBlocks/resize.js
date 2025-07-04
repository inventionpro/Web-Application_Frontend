import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_jimp_resize';

const blockData = {
  message0: 'Resize Image:%1 Width %2 Height %3',
  args0: [
    {
      type: 'input_dummy'
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
  tooltip: 'Resize the image to a specific Width and Height. Can only use Numbers, Variables, or Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const wide = JavaScript.valueToCode(block, 'Width', JavaScript.ORDER_ATOMIC);
  const high = JavaScript.valueToCode(block, 'Height', JavaScript.ORDER_ATOMIC);
  return `await image.resize( Number(` + wide + `), Number(` + high + `))\n`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_JGSAVEIMAGE',
    types: ['jg_beginJimp']
  }
]);
