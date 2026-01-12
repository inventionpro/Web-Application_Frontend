import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_m_create_embed_then_set_color';

const blockData = {
  message0: '%{BKY_M_CREATE_EMBED_THEN_SET_COLOR}',
  args0: [
    {
      type: 'input_value',
      name: 'COLOR',
      check: ['Colour', 'String']
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
  const color = javascriptGenerator.valueToCode(block, 'COLOR', javascriptGenerator.ORDER_ATOMIC);
  const code = `embed.setColor(${color});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'M_RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_m_create_embed_then', 's4d_create_embed_then']
  }
]);
