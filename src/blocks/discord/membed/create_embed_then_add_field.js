import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const fielddescription = javascriptGenerator.valueToCode(block, 'DESCRIPTION', javascriptGenerator.ORDER_ATOMIC);
  const fieldtitle = javascriptGenerator.valueToCode(block, 'TITLE', javascriptGenerator.ORDER_ATOMIC);
  const inline = javascriptGenerator.valueToCode(block, 'INLINE', javascriptGenerator.ORDER_ATOMIC);
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
