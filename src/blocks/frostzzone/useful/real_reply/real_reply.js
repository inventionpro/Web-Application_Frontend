import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'frost_real_reply';

const blockData = {
  message0: 'reply %1 mention %2',
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
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      if (contentType === 'MessageEmbed') {
        const code = `s4dmessage.reply({${content}, allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
        return code;
      } else {
        const code = `s4dmessage.reply({${content}, allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
        return code;
      }
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      const code = `s4dmessage.reply({ embeds:[${content}], allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
      return code;
    } else {
      const code = `s4dmessage.reply({content:String(${content}), allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
      return code;
    }
  } else {
    const code = `s4dmessage.reply({content:String(${content}), allowedMentions: {
        repliedUser: ${boolean}
    }});\n`;
    return code;
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot']
  }
]);
