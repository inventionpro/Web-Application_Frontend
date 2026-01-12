import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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
javascriptGenerator.forBlock[blockname] = (block) => {
  const buffer = javascriptGenerator.valueToCode(block, 'buffer', javascriptGenerator.ORDER_ATOMIC);
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const content = javascriptGenerator.valueToCode(block, 'content', javascriptGenerator.ORDER_ATOMIC);
  const channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  const code = `${channel}.send({
  content: ${content},
  files: [new Discord.AttachmentBuilder(${buffer}, {name: ${name}})]
});`;
  return code;
};
