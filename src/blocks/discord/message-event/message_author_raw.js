import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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
  output: 'String',
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'ID') {
    const code = ['s4dmessage.member.id', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'USERNAME') {
    const code = ['s4dmessage.member.user.username', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'NICKNAME') {
    const code = ['(s4dmessage.member || await s4dmessage.guild.members.fetch(s4dmessage.author.id)).nickname', JavaScript.ORDER_NONE];
    return code;
  }
};
