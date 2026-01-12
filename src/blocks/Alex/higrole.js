import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const memb = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC);
  const code = [`${memb.replaceAll(/member(?=\.user)\.user/gi, 'member')}.roles.highest`, javascriptGenerator.ORDER_NONE];
  return code;
};
