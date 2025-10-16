import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_channel_types';

const blockData = {
  message0: 'Type Of Channel %2 is %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['Server: Text', "'GUILD_TEXT'"],
        ['DM', "'DM'"],
        ['Server: Voice', "'GUILD_VOICE'"],
        ['Group DM', "'GROUP_DM'"],
        ['Server: Category', "'GUILD_CATEGORY'"],
        ['Server: News', "'GUILD_NEWS'"],
        ['Server: Store', "'GUILD_STORE'"],
        // Missing lfg, group lfg, alpha thread
        ['Server: News Thread', "'GUILD_NEWS_THREAD'"],
        ['Server: Public Thread', "'GUILD_PUBLIC_THREAD'"],
        ['Server: Private Thread', "'GUILD_PRIVATE_THREAD'"],
        ['Server: Stage', "'GUILD_STAGE_VOICE'"],
        ['Directory', "'GUILD_DIRECTORY'"],
        ['Server: Forum', "'GUILD_FORUM'"],
        ['Server: Media', "'GUILD_MEDIA'"],
        ['Server: Lobby', "'LOBBY'"],
        ['DM SDK', "'DM_SDK'"]
      ]
    },
    {
      type: 'input_value',
      name: 'Channel',
      check: 'Channel'
    }
  ],
  colour: '#D14081',
  output: 'Boolean',
  tooltip: 'Check if the channel is one of these types of channels.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

const v13channeltov14 = {
  GUILD_TEXT: 0,
  DM: 1,
  GUILD_VOICE: 2,
  GROUP_DM: 3,
  GUILD_CATEGORY: 4,
  GUILD_NEWS: 5,
  GUILD_STORE: 6,
  GUILD_NEWS_THREAD: 10,
  GUILD_PUBLIC_THREAD: 11,
  GUILD_PRIVATE_THREAD: 12,
  GUILD_STAGE_VOICE: 13,
  GUILD_DIRECTORY: 14,
  GUILD_FORUM: 15,
  GUILD_MEDIA: 16,
  LOBBY: 17,
  DM_SDK: 18
};
JavaScript[blockName] = function (block) {
  let type = block.getFieldValue('type');
  // Transform type into something v14 can understand
  type = v13channeltov14[type.replaceAll("'", '')];
  const channel = JavaScript.valueToCode(block, 'Channel', JavaScript.ORDER_ATOMIC);
  const code = [`(${channel}.type) === ${type}`, JavaScript.ORDER_NONE];

  return code;
};
