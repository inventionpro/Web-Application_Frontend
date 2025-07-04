import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'poll';

const blockData = {
  message0: 'Start a poll with title %1message %2color %3 upvote reaction %4 downvote reaction %5',
  args0: [
    {
      type: 'input_value',
      name: 'title',
      check: ['Message', 'String']
    },
    {
      type: 'input_value',
      name: 'message',
      check: ['Message', 'String']
    },
    {
      type: 'input_value',
      name: 'color',
      check: 'Colour'
    },
    {
      type: 'input_value',
      name: 'upvote',
      check: ['Message', 'String']
    },
    {
      type: 'input_value',
      name: 'downvote',
      check: ['Message', 'String']
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

JavaScript[blockName] = function (block) {
  const title = JavaScript.valueToCode(block, 'title', JavaScript.ORDER_ATOMIC);
  const message = JavaScript.valueToCode(block, 'message', JavaScript.ORDER_ATOMIC);
  const color = JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC);
  const up = JavaScript.valueToCode(block, 'upvote', JavaScript.ORDER_ATOMIC);
  const down = JavaScript.valueToCode(block, 'downvote', JavaScript.ORDER_ATOMIC);
  return `s4dmessage.channel.send({
            embeds: [{
                title: ${title},
                color: ${color},
                image: {
                    url: null
                },
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
