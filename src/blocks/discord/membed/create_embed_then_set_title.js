import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_m_create_embed_then_set_title';

const blockData = {
  message0: '%{BKY_M_CREATE_EMBED_THEN_SET_TITLE}',
  args0: [
    {
      type: 'input_value',
      name: 'TITLE',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'URL',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  const title = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_ATOMIC);
  const url = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_ATOMIC);
  const code = `embed.setTitle(${title})\n .setURL(${url}); \n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'M_RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_m_create_embed_then', 's4d_create_embed_then']
  }
]);
