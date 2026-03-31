import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

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
        ['ID', 'ID']
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
    return ['newMessage.member.user.id', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'USERNAME') {
    return ['newMessage.member.user.username', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'NICKNAME') {
    return ['newMessage.member.user.nickname', javascriptGenerator.ORDER_NONE];
  }
};
