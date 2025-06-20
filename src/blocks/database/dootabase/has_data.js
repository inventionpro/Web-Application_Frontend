import Blockly from 'blockly/core';

const blockName = 's4d_has_data2';

const blockData = {
  message0: '%1 exists in dootabase',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  output: 'Boolean',
  colour: '#50a153',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return ['dootabase.has(String(' + key + '))', Blockly.JavaScript.ORDER_ATOMIC];
};
