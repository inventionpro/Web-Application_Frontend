import Blockly from 'blockly/core';

const blockName = 's4d_role_possition';

const blockData = {
  message0: '%{BKY_ROLE_POSSITION}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  output: 'Number',
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`${role}.position`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
