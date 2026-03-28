import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_message_author_raw';
const blockData = {
  message0: '%{BKY_MESSAGE_AUTHOR_RAW}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['%{BKY_USERNAME}', 'USERNAME'],
        ['%{BKY_NICKNAME}', 'NICKNAME'],
        ['id', 'ID']
      ]
    }
  ],
  output: Types.String,
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'ID') {
    return ['s4dmessage.member.id', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'USERNAME') {
    return ['s4dmessage.member.user.username', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'NICKNAME') {
    return ['(s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname', javascriptGenerator.ORDER_NONE];
  }
};
