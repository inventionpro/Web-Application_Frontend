import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'set_perms';
const blockData = {
  message0: '%{BKY_C_SET_PERMS_A}',
  args0: [],
  colour: '#4C97FF',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const boolean = block.getFieldValue('BOOLEAN');
  const searchType = block.getFieldValue('SEARCH');
  if (searchType === 'VIEW_CHANNEL') {
    return [`VIEW_CHANNEL: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'MANAGE_CHANNEL') {
    return [`MANAGE_CHANNEL: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'MANAGE_WEBHOOKS') {
    return [`MANAGE_WEBHOOKS: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'MANAGE_PERMISSIONS') {
    return [`MANAGE_PERMISSIONS: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'CREATE_INSTANT_INVITE') {
    return [`CREATE_INSTANT_INVITE: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'SEND_MESSAGES') {
    return [`SEND_MESSAGES: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'EMBED_LINKS') {
    return [`EMBED_LINKS: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'ATTACH_FILES') {
    return [`ATTACH_FILES: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'READ_MESSAGE_HISTORY') {
    return [`READ_MESSAGE_HISTORY: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'USE_EXTERNAL_EMOJIS') {
    return [`USE_EXTERNAL_EMOJIS: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'VIEW_GUILD_INSIGHTS') {
    return [`VIEW_GUILD_INSIGHTS: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'USE_SLASH_COMMANDS') {
    return [`USE_SLASH_COMMANDS: ${boolean},`, javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'SEND_TTS_MESSAGES') {
    return [`SEND_TTS_MESSAGES: ${boolean},`, javascriptGenerator.ORDER_NONE];
  }
};
