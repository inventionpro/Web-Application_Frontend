import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_create_embed_then_set_author';
const blockData = {
  message0: '%{BKY_CREATE_EMBED_THEN_SET_AUTHOR}',
  args0: [
    {
      type: 'input_value',
      name: 'AUTHOR',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'PFP',
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
  const author = javascriptGenerator.valueToCode(block, 'AUTHOR', javascriptGenerator.ORDER_ATOMIC);
  const pfp = javascriptGenerator.valueToCode(block, 'PFP', javascriptGenerator.ORDER_ATOMIC);
  return `embed.setAuthor(${author}, ${pfp});`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_create_embed_then', 's4d_m_create_embed_then']
  }
]);
