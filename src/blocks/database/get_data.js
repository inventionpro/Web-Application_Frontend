import Blockly from 'blockly/core';

const blockName = 's4d_get_data_new';

const blockData = {
  message0: 'get %1 from the database with name %2  %3',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    }
  ],
  output: null,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  const name2 = name.substring(1, name.length - 1);
  return [`${name2}.get(String(${key}))`, Blockly.JavaScript.ORDER_ATOMIC];
};
