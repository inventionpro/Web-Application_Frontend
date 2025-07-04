import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_roblox_get_user_group_rank';

const blockData = {
  message0: 'get roblox group with ID %1 and check what rank name user ID %2 has then %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'GROUP',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'USER',
      check: ['Number', 'var', 'Env']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: 0,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Get the Roblox group with the ID and check what role user ID has then run the blocks below.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const group = JavaScript.valueToCode(block, 'GROUP', JavaScript.ORDER_ATOMIC);
  const user = JavaScript.valueToCode(block, 'USER', JavaScript.ORDER_ATOMIC);
  const then = JavaScript.statementToCode(block, 'THEN');
  const code = `S4D_APP_NOBLOX.getRankNameInGroup(${group}, ${user}).then(async (roblox_group_rank) => {
  ${then}
})
    `;
  return code;
};
