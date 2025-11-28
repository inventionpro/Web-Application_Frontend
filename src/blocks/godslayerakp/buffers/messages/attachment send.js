import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockname = 'gsa_send_new_attachment_in_channel';

Blockly.Blocks[blockname] = {
  init: function () {
    this.jsonInit({
      message0: 'send attachment with name %2 and content %1 to %4 with message content %3',
      args0: [
        {
          type: 'input_value',
          name: 'buffer',
          check: 'buffer'
        },
        {
          type: 'input_value',
          name: 'name',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'content',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'channel',
          check: ['Channel', 'Member']
        }
      ],
      colour: '#4C97FF',
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Sends back file to the page.',
      helpUrl: ''
    });
  }
};
JavaScript[blockname] = function (block) {
  const buffer = JavaScript.valueToCode(block, 'buffer', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'content', JavaScript.ORDER_ATOMIC);
  const channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.send({
  content: ${content},
  files: [new Discord.AttachmentBuilder(${buffer}, {name: ${name}})]
});`;
  return code;
};
