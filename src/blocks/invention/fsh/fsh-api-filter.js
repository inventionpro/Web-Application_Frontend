import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_fsh_api_filter';
const blockData = {
  message0: 'are there bad words in %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME'
    }
  ],
  inputsInline: true,
  output: Types.Boolean,
  colour: '#1a75ba',
  tooltip: 'Logic that tells you if text contains bad words',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_url = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return [`await _S4D_inventionFSHapi('filter?text=', ${value_url}, 'bad', false)`, javascriptGenerator.ORDER_NONE];
};
