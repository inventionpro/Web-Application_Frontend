import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 'gsa_convert_parse_json_so_it_becomes_list_or_object';
const blockData = {
  type: 'gsa_convert_parse_json_so_it_becomes_list_or_object',
  message0: 'convert json string %1 to object/list',
  args0: [
    {
      type: 'input_value',
      name: 'message',
      check: Types.String
    }
  ],
  output: T(Types.Object, Types.Array),
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
