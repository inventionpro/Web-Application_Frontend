import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'ID') {
    const code = ['oldMessage.member.user.id', javascriptGenerator.ORDER_NONE];
    return code;
  } else if (searchType === 'USERNAME') {
    const code = ['oldMessage.member.user.username', javascriptGenerator.ORDER_NONE];
    return code;
  } else if (searchType === 'NICKNAME') {
    const code = ['oldMessage.member.user.nickname', javascriptGenerator.ORDER_NONE];
    return code;
  }
};
