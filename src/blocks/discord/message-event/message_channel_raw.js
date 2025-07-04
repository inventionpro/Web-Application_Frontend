import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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
    const code = ['(s4dmessage.channel).id', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'NAME') {
    const code = ['(s4dmessage.channel).name', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'TYPE') {
    const code = ['(s4dmessage.channel).type', JavaScript.ORDER_NONE];
    return code;
  }
};
