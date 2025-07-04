import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'prop_voice';

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit({
      message0: '%1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'a',
          options: [
            ['Old State', 'oldState'],
            ['New State', 'newState']
          ]
        },
        {
          type: 'field_dropdown',
          name: 'b',
          options: [
            ['Channel', 'channel'],
            ['server', 'guild'],
            ['Member', 'member'],
            ['Muted (self mute/server mute)', 'mute'],
            ['Self Mute', 'selfMute'],
            ['Self Deafened', 'seldDeaf'],
            ['Video On', 'selfVideo'],
            ['Server Deafened', 'serverDeaf'],
            ['Server Muted', 'serverMute'],
            ['Suppressed', 'suppress']
          ]
        }
      ],
      colour: '#33cc00',
      tooltip: 'Get the old or current state of something about the voice channel.',
      helpUrl: '',
      output: ['Boolean', 'VoiceChannel', 'Server', 'Member']
    });
  }
};
JavaScript[blockName] = function (block) {
  const code = [`${block.getFieldValue('a')}.${block.getFieldValue('b')}`, JavaScript.ORDER_NONE];
  return code;
};
