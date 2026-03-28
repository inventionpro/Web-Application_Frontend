import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'discord_connect';
const blockData = {
  message0: 'Connect to %1 and set track channel',
  args0: [
    {
      type: 'input_value',
      name: 'VOICECHANNEL',
      check: Types.Channel
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const voice = javascriptGenerator.valueToCode(block, 'VOICECHANNEL', javascriptGenerator.ORDER_ATOMIC) || 's4dmessage.member.voice.channel';
  return `await queue.join(${voice});
let queue = client.player.createQueue(message.guild.id, {
  data: {
    channel: s4dmessage.channel
  }
});`;
};
