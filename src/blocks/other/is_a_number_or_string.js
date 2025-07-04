import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'is_a_number_or_string';

const blockData = {
  message0: '%1 is a %2',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: ['Number', 'String']
    },
    {
      type: 'field_dropdown',
      name: 'DATA_TYPE',
      options: [
        ['number', 'NUMBER'],
        ['string', 'STRING']
      ]
    }
  ],
  output: 'Boolean',
  colour: '#D14081',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const dataType = block.getFieldValue('DATA_TYPE');
  const code = JavaScript.valueToCode(block, 'STRING', JavaScript.ORDER_ATOMIC);
  if (dataType == 'NUMBER') {
    return [`typeof (${code}) == "number"`, JavaScript.ORDER_NONE];
  } else if (dataType == 'STRING') {
    return [`typeof (${code}) == "string"`, JavaScript.ORDER_NONE];
  }
};
