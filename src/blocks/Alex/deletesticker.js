import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'delete_sticker';

const blockData = {
  message0: 'In server %1 Delete sticker %2',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'sticker',
      check: 'Sticker'
    }
  ],
  colour: '#02a836',
  tooltip: 'Deletes a sticker from the server.',
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
  const sticker = JavaScript.valueToCode(block, 'sticker', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);

  const code = `${server}.stickers.delete(${sticker}); \n`;
  return code;
};
