import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

import { registerRestrictions } from '../../../restrictions';

const blockName = 'lime_kicked_member_info_attributes';

const blockData = {
  type: 'lime_kicked_member_info_attributes',
  message0: "Get the kicked/leaving member's %1",
  args0: [
    {
      type: 'field_dropdown',
      name: 'options',
      options: [
        ['server id', 'ID'],
        ['server name', 'NAME'],
        ['username', 'USERNAME'],
        ['discriminator', 'DISCRIMINATOR'],
        ['id', 'MEMBER_ID'],
        ['tag', 'TAG']
      ]
    }
  ],
  colour: '#2AC395',
  output: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var dropdown_options = block.getFieldValue('options');
  var code = ``;

  switch (dropdown_options) {
    case 'ID':
      code = `String(kickmember.guild.id)`;
      break;
    case 'NAME':
      code = `kickmember.guild.name`;
      break;
    case 'USERNAME':
      code = `kickmember.user.username`;
      break;
    case 'DISCRIMINATOR':
      code = `kickmember.user.discriminator`;
      break;
    case 'MEMBER_ID':
      code = `String(kickmember.user.id)`;
      break;
    case 'TAG':
      code = 'kickmember.user.tag';
      break;
  }

  return [code, JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_KICK_EVENT',
    types: ['lime_kick_event']
  }
]);
