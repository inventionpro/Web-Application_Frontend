import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_create_embed_then_set_title';
const blockData = {
  message0: '%{BKY_CREATE_EMBED_THEN_SET_TITLE}',
  args0: [
    {
      type: 'input_value',
      name: 'TITLE',
      check: Types.String
    }
  ],
  colour: '#40BF4A',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const title = javascriptGenerator.valueToCode(block, 'TITLE', javascriptGenerator.ORDER_ATOMIC);
  return `embed.setTitle(${title});`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_create_embed_then', 's4d_m_create_embed_then']
  }
]);
