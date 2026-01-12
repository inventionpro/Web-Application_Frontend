import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_get_string_of_data';

const blockData = {
  message0: '%{BKY_GET_STRING_OF_DATA}',
  colour: '#40BF4A',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: ['Number', 'String']
    }
  ],
  tooltip: null,
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
  const replacedValue = value.replace("'", '').replace("'", '');
  const code = [`data.${replacedValue}`, javascriptGenerator.ORDER_NONE];
  return code;
};
