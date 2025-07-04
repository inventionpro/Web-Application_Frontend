import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_send_channel';

const blockData = {
  message0: '%{BKY_SEND_CHANNEL}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['MessageEmbed', 'String', 'Number', 'embed', 'var']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
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
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'var') {
      const code = `${channel}.send({content: String(${content})});\n`;
      return code;
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      const code = `${channel}.send({ embeds:[${content}]});\n`;
      return code;
    } else if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      const code = `${channel}.send({${content}});\n`;
      return code;
    } else {
      const code = `${channel}.send({content:String(${content})});\n`;
      return code;
    }
  } else {
    const code = `${channel}.send({ content: String(${content})});\n`;
    return code;
  }
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CHANNEL',
    types: ['CHANNEL']
  }
]);
