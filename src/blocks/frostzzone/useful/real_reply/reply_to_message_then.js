import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'frost_jg_real_reply_to_message_with_mention_then';

const blockData = {
  message0: 'reply to message %4 with %1 mention %2 then %3',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'MessageEmbed', 'embed']
    },
    {
      type: 'input_value',
      name: 'boolean',
      check: 'Boolean'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Reply to a specific message, then run the blocks inside',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const msg = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const boolean = javascriptGenerator.valueToCode(block, 'boolean', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      const code = `${msg}.reply({${content}, allowedMentions: {
        repliedUser: ${boolean}
    }}).then(async (s4dfrost_real_reply) =>{\n ${statementThen} \n});\n`;
      return code;
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      const code = `${msg}.reply({ embeds:[${content}], allowedMentions: {
        repliedUser: ${boolean}
    }}).then(async (s4dfrost_real_reply) =>{\n ${statementThen} \n});\n`;
      return code;
    } else {
      const code = `${msg}.reply({content:String(${content}), allowedMentions: {
        repliedUser: ${boolean}
    }}).then(async (s4dfrost_real_reply) =>{\n ${statementThen} \n});\n`;
      return code;
    }
  } else {
    const code = `${msg}.reply(String(${content}), allowedMentions: {
        repliedUser: ${boolean}
    }).then(async (s4dfrost_real_reply) =>{\n ${statementThen} \n});\n`;
    return code;
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_INPUTS',
    types: ['CONTENT', 'MESSAGE']
  },
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot']
  }
]);
