import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'explicit_content_filter';
const blockData = {
  type: 'explicit_content_filter',
  message0: '%1 content filter',
  args0: [
    {
      type: 'field_dropdown',
      name: 'NAME',
      options: [
        ['Disabled', 'Disabled'],
        ['Members without roles', 'MembersWithoutRoles'],
        ['All members', 'AllMembers']
      ]
    }
  ],
  inputsInline: true,
  output: Types.Any,
  colour: '#2AC395',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['explicit_content_filter'] = (block) => {
  let dropdown = block.getFieldValue('NAME');
  return [`Discord.GuildExplicitContentFilter.${dropdown}`, javascriptGenerator.ORDER_NONE];
};
