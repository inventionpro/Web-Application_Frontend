import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'redo_maybe_idk_jg_newmsg_edit_date_timestamp_of_message_edit';

const blockData = {
  message0: '%1 of message edit',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['timestamp', 'editedTimestamp'],
        ['date', 'editedAt']
      ]
    }
  ],
  colour: '#5BA58C',
  tooltip: 'The UNIX timestamp of when the message was edited, or the date.',
  output: ['Number', 'Date', 'String']
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const type = block.getFieldValue('TYPE');
  const code = [`newMessage.${type}`, JavaScript.ORDER_NONE];
  return code;
};
