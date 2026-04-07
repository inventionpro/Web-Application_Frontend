import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_fsh_api_censor';
const blockData = {
  message0: 'in text %1 censor bad words',
  args0: [
    {
      type: 'input_value',
      name: 'NAME'
    }
  ],
  inputsInline: true,
  output: Types.String,
  colour: '#1a75ba',
  tooltip: 'Responds with censored version of text inputed',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_url = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return [`await _S4D_inventionFSHapi('filter?text=', ${value_url}, 'censor', ${value_url})`, javascriptGenerator.ORDER_NONE];
};
