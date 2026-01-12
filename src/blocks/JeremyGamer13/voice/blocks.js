import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
Blockly.Blocks['jg_voice_create_connection_to_voice_channel_id_in_server_id'] = {
  init: function () {
    this.jsonInit({
      message0: 'create connection to voice %1 channel ID %2 in server ID %3',
      inputsInline: false,
      args0: [
        {
          type: 'input_dummy'
        },
        {
          type: 'input_value',
          name: 'CHANNEL',
          check: ['String', 'var', 'Var', 'Env', 'env', 'Number']
        },
        {
          type: 'input_value',
          name: 'SERVER',
          check: ['String', 'var', 'Var', 'Env', 'env', 'Number']
        }
      ],
      colour: 115,
      output: 'VoiceChannelConnection',
      tooltip: 'Connect to a voice channel. This can be saved in a variable to do things like play audio files or leave the VC.',
      helpUrl: ''
    });
  }
};
javascriptGenerator.forBlock['jg_voice_create_connection_to_voice_channel_id_in_server_id'] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  const code = [
    `S4D_APP_DJS_VOICE.joinVoiceChannel({
      channelId: String(${channel}),
      guildId: String(${server}),
      adapterCreator: s4dmessage.guild.voiceAdapterCreator
})`,
    javascriptGenerator.ORDER_NONE
  ];
  return code;
};
Blockly.Blocks['jg_voice_disconnect_from_voice_connection'] = {
  init: function () {
    this.jsonInit({
      message0: 'disconnect from voice connection %1',
      inputsInline: false,
      args0: [
        {
          type: 'input_value',
          name: 'CONNECTION',
          check: ['VoiceChannelConnection']
        }
      ],
      colour: 115,
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Remove a voice connection to leave the voice channel it was made for.',
      helpUrl: ''
    });
  }
};
javascriptGenerator.forBlock['jg_voice_disconnect_from_voice_connection'] = (block) => {
  const connection = javascriptGenerator.valueToCode(block, 'CONNECTION', javascriptGenerator.ORDER_ATOMIC);
  const code = `${connection}.destroy()
`;
  return code;
};
Blockly.Blocks['jg_voice_play_audio_file_at_percent_volume_on_connection'] = {
  init: function () {
    this.jsonInit({
      message0: 'play audio file %1 at volume %2 on connection %3',
      inputsInline: false,
      args0: [
        {
          type: 'input_value',
          name: 'FILE',
          check: ['String', 'Var', 'var', 'Env']
        },
        {
          type: 'input_value',
          name: 'VOLUME',
          check: ['Number', 'Var', 'var', 'Env']
        },
        {
          type: 'input_value',
          name: 'CONNECTION',
          check: ['VoiceChannelConnection']
        }
      ],
      colour: 115,
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Play an audio file at a certain volume on the specified connection.',
      helpUrl: ''
    });
  }
};
javascriptGenerator.forBlock['jg_voice_play_audio_file_at_percent_volume_on_connection'] = (block) => {
  const file = javascriptGenerator.valueToCode(block, 'FILE', javascriptGenerator.ORDER_ATOMIC);
  const volume = javascriptGenerator.valueToCode(block, 'VOLUME', javascriptGenerator.ORDER_ATOMIC);
  const connection = javascriptGenerator.valueToCode(block, 'CONNECTION', javascriptGenerator.ORDER_ATOMIC);
  const code = `let S4D_APP_TEMP_resource = S4D_APP_DJS_VOICE.createAudioResource(S4D_APP_VOICE_FS.createReadStream(String(${file})), {
    inlineVolume: true
});
S4D_APP_TEMP_resource.volume.setVolume(Number(${volume}) / 100);
let S4D_APP_TEMP_player = S4D_APP_DJS_VOICE.createAudioPlayer();
${connection}.subscribe(S4D_APP_TEMP_player);
S4D_APP_TEMP_player.play(S4D_APP_TEMP_resource)
`;
  return code;
};
