import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'send_ahq_embed';
const blockData = {
  message0: 'Send Embeds %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: Types.String
    }
  ],
  colour: '#40BF4A',
  output: Types.Embed,
  tooltip: 'Sends a named embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let label = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  label = label.replace("'", '').replace("'", '');
  return [`{ embeds: [${label}] }`, javascriptGenerator.ORDER_ATOMIC];
};
