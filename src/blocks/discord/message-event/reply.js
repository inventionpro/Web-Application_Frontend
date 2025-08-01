import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_reply';

const blockData = {
  message0: '%{BKY_REPLY_MSG}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'MessageEmbed', 'embed', 'var', 'MessagePayload']
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

JavaScript[blockName] = function (block) {
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === null) {
      const code = `s4dmessage.channel.send(${content});\n`;
      return code;
    } else if (contentType === 'MessagePayload') {
      const code = `s4dmessage.channel.send(${content});\n`;
      return code;
    } else if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      const code = `s4dmessage.channel.send({${content}});\n`;
      return code;
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      const code = `s4dmessage.channel.send({ embeds:[${content}]});\n`;
      return code;
    } else {
      const code = `s4dmessage.channel.send({content:String(${content})});\n`;
      return code;
    }
  } else {
    const code = `s4dmessage.channel.send({content:String(${content})});\n`;
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
    types: ['s4d_on_message', 'jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot', 'when_message_is_edited']
  }
]);
