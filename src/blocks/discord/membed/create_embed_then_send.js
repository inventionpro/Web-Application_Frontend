import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_m_create_embed_then_send';

const blockData = {
  message0: 'send embed in channel %1 with text %2',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'TEXT',
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
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const text = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.send({${text === '' ? '' : `content:${text},`} embeds: [embed] });\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'M_RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_m_create_embed_then', 's4d_create_embed_then']
  }
]);
