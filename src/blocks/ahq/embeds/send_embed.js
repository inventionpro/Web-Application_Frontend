import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = (block) => {
  const code = [`embeds: [${javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE).replace("'", '').replace("'", '')}]`, javascriptGenerator.ORDER_ATOMIC];
  return code;
};
