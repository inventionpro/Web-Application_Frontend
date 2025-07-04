import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
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

JavaScript[blockName] = function (block) {
  const footer = JavaScript.valueToCode(block, 'FOOTER', JavaScript.ORDER_ATOMIC);
  const footerimage = JavaScript.valueToCode(block, 'IMAGE', JavaScript.ORDER_ATOMIC);
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
