import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'send_ahq_embed';

const blockData = {
  message0: 'Send Embeds %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: 'String'
    }
  ],
  colour: '#40BF4A',
  output: 'MessageEmbed',
  tooltip: 'Sends a named embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = [`embeds: [${JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE).replace("'", '').replace("'", '')}]`, JavaScript.ORDER_ATOMIC];
  return code;
};
