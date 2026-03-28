import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'send_sticker';
const blockData = {
  message0: 'In channel %1 send sticker %2',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'sticker',
      check: Types.Sticker
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  const sticker = javascriptGenerator.valueToCode(block, 'sticker', javascriptGenerator.ORDER_ATOMIC);
  return `${channel}.send({stickers: [${sticker}]});`;
};
