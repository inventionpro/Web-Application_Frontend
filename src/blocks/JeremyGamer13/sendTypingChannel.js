import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';

const blockName = 'jg_typingChannel';

const blockData = {
  message0: 'start typing in channel %1',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: ['Channel']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Makes the "(name) is typing..." pop-up appear. The pop-up disappears after around 10 seconds, or when the bot sends a new message.',
  helpUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const fileSendChannel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  return `${fileSendChannel}.sendTyping();
    `;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CHANNEL',
    types: ['CHANNEL']
  }
]);
