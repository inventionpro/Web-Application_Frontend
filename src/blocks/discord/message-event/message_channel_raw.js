import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_message_channel_raw';
const blockData = {
  message0: '%{BKY_MESSAGE_CHANNEL_RAW}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['%{BKY_NAME}', 'NAME'],
        ['id', 'ID'],
        ['type', 'TYPE']
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
    return ['(s4dmessage.channel).id', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'NAME') {
    return ['(s4dmessage.channel).name', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'TYPE') {
    return ['(s4dmessage.channel).type', javascriptGenerator.ORDER_NONE];
  }
};
