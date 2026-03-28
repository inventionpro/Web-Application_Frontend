import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'get_sticker';
const blockData = {
  message0: 'Get sticker on server %1 with name equal to %2',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    },
    {
      type: 'input_value',
      name: 'sticker',
      check: Types.String
    }
  ],
  output: Types.Sticker,
  colour: '#02a836',
  tooltip: 'Obtains a sticker from the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const guild = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  const sticker = javascriptGenerator.valueToCode(block, 'sticker', javascriptGenerator.ORDER_ATOMIC);
  return [`${guild}.stickers.cache.find(s => s.name == ${sticker})`, javascriptGenerator.ORDER_NONE];
};
