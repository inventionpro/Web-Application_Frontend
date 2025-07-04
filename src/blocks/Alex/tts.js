import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'tts-test';

const blockData = {
  message0: 'Play TTS %1 in channel %2 in server %3',
  args0: [
    {
      type: 'input_value',
      name: 'tts',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'channel',
      check: 'VoiceChannel'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
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

JavaScript[blockName] = function (block) {
  const playtts = JavaScript.valueToCode(block, 'tts', JavaScript.ORDER_ATOMIC);
  const channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const code = `const stream=discordTTS.getVoiceStream(${playtts});
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: ${channel}.id,
                guildId: ${server}.id,
                adapterCreator: ${server}.voiceAdapterCreator,
            });
            voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }`;
  return code;
};
