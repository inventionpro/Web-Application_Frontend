import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_m_create_embed_then_send';
const blockData = {
  message0: 'send embed in channel %1 with text %2',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'TEXT',
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
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  return `${channel}.send({
  ${text === '' ? '' : `content: ${text},\n  `}embeds: [embed]
});`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'M_RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_m_create_embed_then', 's4d_create_embed_then']
  }
]);
