import * as Blockly from 'blockly/core';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_create_embed_then_add_link';

const blockData = {
  message0: 'Set Embed Url %1',
  args0: [
    {
      type: 'input_value',
      name: 'DESCRIPTION',
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

Blockly.JavaScript[blockName] = function (block) {
  const uri = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_ATOMIC);
  const code = `embed.setURL(${uri});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_create_embed_then', 's4d_m_create_embed_then']
  }
]);
