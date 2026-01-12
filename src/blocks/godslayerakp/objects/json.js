import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_convert_parse_json_so_it_becomes_list_or_object';
const blockData = {
  type: 'gsa_convert_parse_json_so_it_becomes_list_or_object',
  message0: 'convert json string %1 to object/list',
  args0: [
    {
      type: 'input_value',
      name: 'message',
      check: 'String'
    }
  ],
  output: ['Object', 'Array', 'List'],
  colour: '#BA4A9A',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'message', javascriptGenerator.ORDER_ATOMIC);
  return [`JSON.parse(${message})`, javascriptGenerator.ORDER_NONE];
};
