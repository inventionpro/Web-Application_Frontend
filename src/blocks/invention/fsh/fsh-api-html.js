import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'lars-inv_fsh_api_html';
const blockData = {
  message0: 'Get HTML from %1',
  args0: [
    {
      type: 'input_value',
      name: 'url',
      align: 'CENTRE'
    }
  ],
  inputsInline: true,
  output: Types.String,
  colour: '#1a75ba',
  tooltip: 'Gets the html code of a website (e.g. https://google.com)',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_url = javascriptGenerator.valueToCode(block, 'url', javascriptGenerator.ORDER_ATOMIC);
  return [`await _S4D_inventionFSHapi('html?url=', ${value_url}, '', '')`, javascriptGenerator.ORDER_NONE];
};
