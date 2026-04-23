import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'embed_send_round';
const blockData = {
  message0: 'send embed %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: Types.String
    }
  ],
  colour: '#54CF83',
  output: Types.Embed,
  tooltip: 'Send the named embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var name = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  name = name.split(' ').join('_').toLowerCase().replace("'", '').replace("'", '');
  return [`{ embeds: [${name}] }`, javascriptGenerator.ORDER_ATOMIC];
};
