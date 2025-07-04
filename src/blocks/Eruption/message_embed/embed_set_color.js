import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_embed_set_color';

const blockData = {
  message0: 'set embed color %1',
  args0: [
    {
      type: 'input_value',
      name: 'COLOUR',
      check: 'Colour'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#40BF4A',
  tooltip: 'Set the color of an embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const color = JavaScript.valueToCode(block, 'COLOUR', JavaScript.ORDER_ATOMIC);
  const code = `hnxgcjtirh.setColor(${color}); \n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_embed_create']
  }
]);
