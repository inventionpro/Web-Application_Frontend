import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'newmsg_member';

const blockData = {
  message0: '%{BKY_N_MAS}',
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
    const code = ['newMessage.member.user.id', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'USERNAME') {
    const code = ['newMessage.member.user.username', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'NICKNAME') {
    const code = ['newMessage.member.user.nickname', JavaScript.ORDER_NONE];
    return code;
  }
};
