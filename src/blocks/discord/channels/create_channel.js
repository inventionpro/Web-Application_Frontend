import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_create_channel';
const blockData = {
  message0: '%{BKY_CREATE_CHANNEL}',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'SERVER',
      check: Types.Server
    },
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['Text', 'TEXT'],
        ['Announcement', 'GuildAnnouncement'],
        ['Forum', 'GuildForum'],
        ['Media', 'GuildMedia'],
        ['Category', 'CATEGORY'],
        ['Voice', 'VOICE'],
        ['Stage', 'GuildStageVoice']
      ]
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let type = block.getFieldValue('TYPE');
  type = type.replace('TEXT', 'GuildText').replace('VOICE', 'GuildVoice').replace('CATEGORY', 'GuildCategory');
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  return `${server}.channels.create(${name}, {
  type: Discord.ChannelType.${type}
});`;
};
