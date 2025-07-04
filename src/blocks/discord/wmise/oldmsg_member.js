import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'oldmsg_member';

const blockData = {
  message0: '%1',
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
  },
  isHiden: true
};

JavaScript[blockName] = function (block) {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'ID') {
    const code = ['oldMessage.member.user.id', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'USERNAME') {
    const code = ['oldMessage.member.user.username', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'NICKNAME') {
    const code = ['oldMessage.member.user.nickname', JavaScript.ORDER_NONE];
    return code;
  }
};
