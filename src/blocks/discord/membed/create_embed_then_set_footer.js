import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_m_create_embed_then_set_footer';

const blockData = {
  message0: '%{BKY_M_CREATE_EMBED_THEN_SET_FOOTER}',
  args0: [
    {
      type: 'input_value',
      name: 'FIELD',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'IMAGE',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const field = javascriptGenerator.valueToCode(block, 'FIELD', javascriptGenerator.ORDER_ATOMIC);
  const fieldimage = javascriptGenerator.valueToCode(block, 'IMAGE', javascriptGenerator.ORDER_ATOMIC);
  const code = `embed.setFooter(${field},${fieldimage});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'M_RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_m_create_embed_then', 's4d_create_embed_then']
  }
]);
