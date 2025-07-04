import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  const replacedValue = value.replace("'", '').replace("'", '');
  const code = [`data.${replacedValue}`, JavaScript.ORDER_NONE];
  return code;
};
