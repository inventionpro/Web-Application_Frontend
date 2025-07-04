import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_roblox_get_user_id_from_username';

const blockData = {
  message0: 'get roblox user id from username %1 then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: ['String', 'var', 'Env']
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
  tooltip: 'Get the Roblox user ID with the username and then run the blocks below.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const user = JavaScript.valueToCode(block, 'USER', JavaScript.ORDER_ATOMIC);
  const then = JavaScript.statementToCode(block, 'THEN');
  const code = `S4D_APP_NOBLOX.getIdFromUsername(String(${user})).then(async (gained_roblox_user_id) => {
    ${then}
})
    `;
  return code;
};
