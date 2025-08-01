import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'send_sticker';

const blockData = {
  message0: 'In channel %1 send sticker %2',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'sticker',
      check: 'Sticker'
    }
  ],
  colour: '#02a836',
  tooltip: 'Sends a sticker to a specific channel.',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  const sticker = JavaScript.valueToCode(block, 'sticker', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.send({stickers: [${sticker}]})
    `;
  return code;
};
