import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'poll';
const blockData = {
  message0: 'Start a poll with title %1 message %2 color %3 upvote reaction %4 downvote reaction %5',
  args0: [
    {
      type: 'input_value',
      name: 'title',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'message',
      check: Types.Message
    },
    {
      type: 'input_value',
      name: 'color',
      check: Types.Color
    },
    {
      type: 'input_value',
      name: 'upvote',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'downvote',
      check: Types.String
    }
  ],
  colour: '#D14081',
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
  const title = javascriptGenerator.valueToCode(block, 'title', javascriptGenerator.ORDER_ATOMIC);
  const message = javascriptGenerator.valueToCode(block, 'message', javascriptGenerator.ORDER_ATOMIC);
  const color = javascriptGenerator.valueToCode(block, 'color', javascriptGenerator.ORDER_ATOMIC);
  const up = javascriptGenerator.valueToCode(block, 'upvote', javascriptGenerator.ORDER_ATOMIC);
  const down = javascriptGenerator.valueToCode(block, 'downvote', javascriptGenerator.ORDER_ATOMIC);
  return `s4dmessage.channel.send({
  embeds: [{
    title: ${title},
    color: ${color},
    description: ${message},
    footer: {
      text: (['Poll by ', (s4dmessage.author).username, (s4dmessage.author).discriminator].join(''))
    },
    thumbnail: {
      url: ((s4dmessage.member.user).displayAvatarURL({
        format: "png"
      }))
    }
  }],
}).then(async (s4dreply) => {
  s4dreply.react(${up});
  s4dreply.react(${down});
});`;
};
