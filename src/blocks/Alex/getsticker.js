import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'get_sticker';

const blockData = {
  message0: 'Get sticker on server %1 with name equal to %2',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'sticker',
      check: 'String'
    }
  ],
  output: 'Sticker',
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
  const code = [`${guild}.stickers.cache.find(s => s.name == ${sticker}) \n`, javascriptGenerator.ORDER_NONE];
  return code;
};
