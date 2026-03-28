import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'tts-test';
const blockData = {
  message0: 'Play TTS %1 in channel %2 in server %3',
  args0: [
    {
      type: 'input_value',
      name: 'tts',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'channel',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    }
  ],
  colour: '#5153c2',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const playtts = javascriptGenerator.valueToCode(block, 'tts', javascriptGenerator.ORDER_ATOMIC);
  const channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  return `const stream=discordTTS.getVoiceStream(${playtts});
const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
if (!voiceConnection || voiceConnection.status===VoiceConnectionStatus.Disconnected) {
  voiceConnection = joinVoiceChannel({
    channelId: ${channel}.id,
    guildId: ${server}.id,
    adapterCreator: ${server}.voiceAdapterCreator,
  });
  voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5000);
}
if (voiceConnection.status===VoiceConnectionStatus.Connected) {
  voiceConnection.subscribe(audioPlayer);
  audioPlayer.play(audioResource);
}`;
};
