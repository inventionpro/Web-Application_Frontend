import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const user = javascriptGenerator.valueToCode(block, 'USER', javascriptGenerator.ORDER_ATOMIC);
  const code = [`Cooldown.has(${user}.id)`, javascriptGenerator.ORDER_NONE];
  return code;
};
