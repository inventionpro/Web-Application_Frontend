import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_m_create_embed_then_add_field';

const blockData = {
  message0: '%{BKY_M_CREATE_EMBED_THEN_ADD_FIELD}',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'TITLE',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'DESCRIPTION',
      check: ['String', 'hyperlink']
    },
    {
      type: 'input_value',
      name: 'INLINE',
      check: 'Boolean'
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
  const fielddescription = JavaScript.valueToCode(block, 'DESCRIPTION', JavaScript.ORDER_ATOMIC);
  const fieldtitle = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_ATOMIC);
  const inline = JavaScript.valueToCode(block, 'INLINE', JavaScript.ORDER_ATOMIC);
  const code = `embed.addField(${fieldtitle},${fielddescription},${inline === null ? false : inline});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'M_RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_m_create_embed_then', 's4d_create_embed_then']
  }
]);
