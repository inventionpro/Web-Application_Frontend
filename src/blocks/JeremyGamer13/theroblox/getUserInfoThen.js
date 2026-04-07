import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_roblox_get_user_info';
const blockData = {
  message0: 'get roblox user id %1 info then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: Types.Number
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
  tooltip: 'Get the Roblox user with the ID and then run the blocks below.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const user = javascriptGenerator.valueToCode(block, 'USER', javascriptGenerator.ORDER_ATOMIC);
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  return `S4D_APP_NOBLOX.getPlayerInfo({userId: Number(${user})}).then(async (roblox_user_info) => {
  ${then}
});`;
};
