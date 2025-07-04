import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_embed_set_thumb';

const blockData = {
  message0: 'set embed thumbnail %1',
  args0: [
    {
      type: 'input_value',
      name: 'THUMB'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#40BF4A',
  tooltip: 'Set the thumbnail of an embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const thumbnail = JavaScript.valueToCode(block, 'THUMB', JavaScript.ORDER_ATOMIC);
  const code = `hnxgcjtirh.setThumbnail(String(${thumbnail})); \n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_embed_create']
  }
]);
