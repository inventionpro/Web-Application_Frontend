import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'is_member_on_cooldown';

const blockData = {
  message0: 'is member on cooldown %1',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: 'Member'
    }
  ],
  colour: '#187795',
  output: 'Boolean',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const user = JavaScript.valueToCode(block, 'USER', JavaScript.ORDER_ATOMIC);
  const code = [`Cooldown.has(${user}.id)`, JavaScript.ORDER_NONE];
  return code;
};
