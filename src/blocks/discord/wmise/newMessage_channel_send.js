import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_replys';

const blockData = {
  message0: 'send message in new message channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'MessageEmbed', 'embed']
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
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === 'MessageEmbed') {
      const code = `newMessage.channel.send({${content}});\n`;
      return code;
    }
    if (contentType === 'Embed') {
      const code = `newMessage.channel.send({embeds:[${content}]});\n`;
      return code;
    } else {
      const code = `newMessage.channel.send({content:String(${content})});\n`;
      return code;
    }
  } else {
    const code = `newMessage.channel.send({content:String(${content})});\n`;
    return code;
  }
};
