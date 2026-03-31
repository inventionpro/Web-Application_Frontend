import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 'frost_real_reply_then';
const blockData = {
  message0: 'reply %1 mention %2 then %3',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'boolean',
      check: Types.Boolean
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
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
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const boolean = javascriptGenerator.valueToCode(block, 'boolean', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === Types.Embed[0]) return `s4dmessage.reply({
  embeds: [${content}],
  allowedMentions: {
    repliedUser: ${boolean}
  }
}).then(async s4dfrost_real_reply => {
${statementThen}
});`;
  }
  return `s4dmessage.reply({
  content: String(${content}),
  allowedMentions: {
    repliedUser: ${boolean}
  }
}).then(async s4dfrost_real_reply => {
${statementThen}
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot']
  }
]);
