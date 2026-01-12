import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'get_member_invites';

const blockData = {
  message0: 'get member invites %1',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: 'Member'
    }
  ],
  colour: '#187795',
  output: 'Number',
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
  const code = [`await s4d.Inviter.getInvites(${user})`, javascriptGenerator.ORDER_NONE];
  return code;
};
