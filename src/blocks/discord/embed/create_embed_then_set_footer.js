import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_create_embed_then_set_footer';

const blockData = {
  message0: '%{BKY_CREATE_EMBED_THEN_SET_FOOTER}',
  args0: [
    {
      type: 'input_value',
      name: 'FOOTER',
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
  const footer = javascriptGenerator.valueToCode(block, 'FOOTER', javascriptGenerator.ORDER_ATOMIC);
  const footerimage = javascriptGenerator.valueToCode(block, 'IMAGE', javascriptGenerator.ORDER_ATOMIC);
  const code = `embed.setFooter(${footer},${footerimage});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_create_embed_then', 's4d_m_create_embed_then']
  }
]);
