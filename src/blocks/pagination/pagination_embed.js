import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'pagination_embed';

const blockData = {
  message0: '%1 %2',
  args0: [
    {
      type: 'input_value',
      name: 'EMBED1',
      check: ['Embed', 'Embeds', 'MessageEmbed']
    },
    {
      type: 'input_value',
      name: 'EMBED2',
      check: ['Embed', 'Embeds', 'MessageEmbed']
    }
  ],
  output: 'Embeds',
  colour: '#5BA58C',
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const embed1 = JavaScript.valueToCode(block, 'EMBED1', JavaScript.ORDER_ATOMIC);
  const embed2 = JavaScript.valueToCode(block, 'EMBED2', JavaScript.ORDER_ATOMIC);
  const code = [`${embed1},${embed2}`, JavaScript.ORDER_NONE];
  return code;
};
