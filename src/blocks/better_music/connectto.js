import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'discord_connect';

const blockData = {
  message0: 'Connect to %1 and set track channel',
  args0: [
    {
      type: 'input_value',
      name: 'VOICECHANNEL',
      check: 'VoiceChannel'
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

JavaScript[blockName] = function (block) {
  const voice = JavaScript.valueToCode(block, 'VOICECHANNEL', JavaScript.ORDER_ATOMIC) || 's4dmessage.member.voice.channel';
  const code = `
    await queue.join(${voice});
    let queue = client.player.createQueue(message.guild.id, {
        data: {
            channel: s4dmessage.channel
        }
    });`;
  return code;
};
