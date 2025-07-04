import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'hig_role';

const blockData = {
  message0: 'Highest role of member %1',
  args0: [
    {
      type: 'input_value',
      check: 'Member',
      name: 'member',
      text: ''
    }
  ],
  output: 'Role',
  colour: '#6cb5e6',
  tooltip: 'Gets the highest role a member has.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const memb = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC);
  const code = [`${memb.replaceAll(/member(?=\.user)\.user/gi, 'member')}.roles.highest`, JavaScript.ORDER_NONE];
  return code;
};
