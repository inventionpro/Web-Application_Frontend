import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'frost_jg_real_reply_to_message_with_mention';

const blockData = {
  message0: 'reply to message %1 with %2 mention %3',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
    },
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'MessageEmbed', 'embed']
    },
    {
      type: 'input_value',
      name: 'boolean',
      check: 'Boolean'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Reply to a certain message.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const msg = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  const boolean = JavaScript.valueToCode(block, 'boolean', JavaScript.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      if (contentType === 'MessageEmbed') {
        const code = `${msg}.reply({${content}, allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
        return code;
      } else {
        const code = `${msg}.reply({${content}, allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
        return code;
      }
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      const code = `${msg}.reply({ embeds:[${content}], allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
      return code;
    } else {
      const code = `${msg}.reply({content:String(${content}), allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
      return code;
    }
  } else {
    const code = `${msg}.reply({content:String(${content}), allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
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
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot']
  }
]);
